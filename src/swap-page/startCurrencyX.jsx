/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getApi, getCurrency, getRange, getEstimatedValue } from "../handleApi/currencyApi";
import ErrorBoundary from "../ErrorBoundary";
import Recieve from "./Exchange/recieve";
import Send from "./Exchange/send";
import returnError from "../handleApi/errorResponse";

function ExchangeCurrency() {
  const link = 'https://api.simpleswap.io/';
  const [exchangeData, setExchangeData] = useState({
    sendCurrency: {symbol: 'btc'},
    receiveCurrency: {symbol: 'eth'},
    allCurrency: []
  });
  const [exchangeValue, setExchangeValue] = useState({
    sendAmount: 0.5,
    receiveAmount: '0',
    isLoading: false,
  });
  const [range, setRange] = useState({minRange: '', maxRange: ''});
  const [valueError, setValueError] = useState(false);

  const sendChange = (event) => {
    const regex = /^[0-9]*\.?[0-9]*$/; //  /^[0-9]*\.?[0-9]+$/
    const inputValue = event.target.value;

    if (regex.test(inputValue)) {

      setExchangeValue({
        ...exchangeValue,
        sendAmount: inputValue,
        // isLoading: true,
      })
    } 

    if(inputValue < range.minRange || 
      inputValue > range.maxRange) {
        setValueError(`Min or Max value is ${range.minRange} ${range.maxRange}`);

    } else {
      setValueError(false);
    }
  };

    async function getApiFunc() {
      const result = await getApi(link + 'get_all_currencies');
      if(result.status === 200) {
        setExchangeData({...exchangeData, allCurrency: result.data});
      } else {
        console.log(returnError(result.response));
      }
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
        console.log(returnError(cryptoFrom.response));
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
        console.log(returnError(range.response));
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
        setExchangeValue({...exchangeValue, receiveAmount:res.data});
      } else {
        console.log(returnError(res.response));
      }
    }

    useEffect(() => {
      const debounceTimer = setTimeout(() => {
        getEstimatedAmount();
      }, 2000);
      return () => clearTimeout(debounceTimer);
    }, [exchangeValue.sendAmount]);

    useEffect(() => {
      getApiFunc();
      getApiCurrency();
      getApiRange();
      if (exchangeValue.receiveAmount == '0') {
        setExchangeValue({...exchangeValue, isLoading: true});
      } else {
        setExchangeValue({...exchangeValue, isLoading: false});
      }
    }, []);

    return(
      <>
        {/* <!-- start of currency exchange --> */}

        <div className="exchange-container">
          
          <h2>Select currency</h2>
          <div className="exchange-box">
            <ErrorBoundary fallback=''>
              <Send 
              sendCurrency={exchangeData.sendCurrency}
              handleChange={sendChange}
              value={exchangeValue.sendAmount}
              valueError={valueError}
              />
            </ErrorBoundary>
            <ErrorBoundary fallback=''>
              <Recieve 
              receiveCurrency={exchangeData.receiveCurrency}
              value={exchangeValue.receiveAmount}
              isLoading={exchangeValue.isLoading}
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