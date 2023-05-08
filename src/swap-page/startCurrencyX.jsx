/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCurrency, getRange, getEstimatedValue } from "../handleApi/currencyApi";
import ErrorBoundary from "../ErrorBoundary";
import Recieve from "./Exchange/recieve";
import Send from "./Exchange/send";
import returnError from "../handleApi/errorResponse";

function ExchangeCurrency() {
  const link = 'https://api.simpleswap.io/';
  const [exchangeData, setExchangeData] = useState({
    sendCurrency: {symbol: 'btc'},
    receiveCurrency: {symbol: 'eth'},

  });
  const [exchangeValue, setExchangeValue] = useState({
    sendAmount: 0.5,
    receiveAmount: '0',
    isLoading: false,
  });
  const [range, setRange] = useState({minRange: '', maxRange: ''});
  const [valueError, setValueError] = useState(false);


  const sendChange = (event) => {
    const regex = /^[0-9]*\.?[0-9]*$/ // /^[13][a-km-zA-HJ-NP-Z1-9]{25,80}$|^(bc1)[0-9A-Za-z]{25,80}$/ // /^[0-9]*\.?[0-9]*$/;   /^[0-9]*\.?[0-9]+$/;
    const inputValue = event.target.value;

    if (regex.test(inputValue)) {

      setExchangeValue({
        ...exchangeValue,
        sendAmount: inputValue,

      })
    } 

    if(inputValue < range.minRange || 
      inputValue > range.maxRange) {
        setValueError(`Min or Max value is ${range.minRange} ${range.maxRange}`);

    } else {
      setValueError(false);
    }
  };
  function handleSendcurrency(data) {
    setExchangeValue({
      ...exchangeValue,
      isLoading: true
    })
    setValueError(false);
    setExchangeData({...exchangeData, sendCurrency: data});

  }
  function handleReceivecurrency(data) {
    setExchangeValue({
      ...exchangeValue,
      isLoading: true
    })
    setValueError(false);
    setExchangeData({...exchangeData, receiveCurrency: data});

  }
  function handleFocus() {
    setExchangeValue({
      ...exchangeValue,
      isLoading: true

    })
  }

  async function getApiCurrency() {
    const cryptoFrom = await getCurrency(
      link + 'get_currency', 
      exchangeData['sendCurrency'].symbol);
    const cryptoTo = await getCurrency(
      link + 'get_currency', 
      exchangeData['receiveCurrency'].symbol);
    if(cryptoFrom.status === 200 && cryptoTo.status === 200) {
      setExchangeData({
        ...exchangeData, 
        sendCurrency: cryptoFrom.data,
        receiveCurrency: cryptoTo.data
      });

    } else {
      // setValueError(false);
      toast(returnError(cryptoFrom.response));
    }
  }

  async function getApiRange() {
    const range = await getRange(
      link + 'get_ranges',
      exchangeData.sendCurrency.symbol,
      exchangeData.receiveCurrency.symbol
    );
    if(range.status == 200) {
      setRange({minRange: range.data.min, maxRange: range.data.max});
    } else {
      // setValueError(false);
      toast(returnError(range.response));
    }
  }
    async function getEstimatedAmount() {
      const res = await getEstimatedValue(
        link + 'get_estimated',
        exchangeData.sendCurrency.symbol,
        exchangeData.receiveCurrency.symbol,
        exchangeValue.sendAmount
      );
      if(res.status == 200) {
        setExchangeValue({
          ...exchangeValue, 
          receiveAmount:res.data, 
          isLoading: false
        });
        setValueError(false);
        // setExchangeValue({...exchangeValue, isLoading: false});

      } else {
        if (res.response.status == 422) {
          toast('Unprocessable Entity');
          setExchangeValue({...exchangeValue, isLoading: true});
        } else {
          setValueError(false);
          toast(returnError(res.response));
          setExchangeValue({...exchangeValue, isLoading: true});
        }
      }
    }

    useEffect(() => {
      const debounceTimer = setTimeout(() => {
        getEstimatedAmount();
      }, 400);
      return () => clearTimeout(debounceTimer);
    }, [exchangeValue.sendAmount]);
    useEffect(() => {
        getEstimatedAmount();

    }, [exchangeData.receiveCurrency]);

    useEffect(() => {
      getApiRange();

    }, [exchangeData.sendCurrency, exchangeData.receiveCurrency, exchangeValue.sendAmount]);
    useEffect(() => {
      getApiCurrency();
      // getApiRange();

      if (exchangeValue.receiveAmount == '0') {
        setExchangeValue({...exchangeValue, isLoading: true});
      } else {
        setExchangeValue({...exchangeValue, isLoading: false});
      }

    }, []);

    return(
      <>
        {/* <!-- start of currency exchange --> */}
        <ToastContainer/>
        <div className="exchange-container">
          
          <h2>Select currency</h2>
          <div className="exchange-box">
            <ErrorBoundary fallback=''>
              <Send 
              sendCurrency={exchangeData.sendCurrency}
              handleChange={sendChange}
              value={exchangeValue.sendAmount}
              valueError={valueError}
              handleClick={handleSendcurrency}
              handleFocus={handleFocus}
              />
            </ErrorBoundary>
            <ErrorBoundary fallback=''>
              <Recieve 
              receiveCurrency={exchangeData.receiveCurrency}
              value={exchangeValue.receiveAmount}
              isLoading={exchangeValue.isLoading}
              handleClick={handleReceivecurrency}
              />
            </ErrorBoundary>
            <i className="fa-solid fa-arrow-right-arrow-left"></i>
          </div>
          <a href="#">Exchange</a>

        </div> 

         {/* <!-- end of currency exchange --> */}
      </>
    )
  }
  export default ExchangeCurrency;