import '../../Styling/exchange.css';
import { Fragment, useEffect, useState } from "react";
import { getApi } from '../../handleApi/currencyApi';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';


function CryptoListTo({ displayList, clickWindow}) {

    const [currencies, setCurrencies] = useState([]);
    const [error, setError] = useState('');

    function stopWindow(e) {
        e.stopPropagation();
    }

    async function getApiFunc() {
      const link = 'https://api.simpleswap.io/get_all_currencies';
      const response = await getApi(link)
      if(response.status === 200) {
        setCurrencies(response.data);
      } else {
        const { data } = response.response;
        setError(data.error);
      }
    }
    useEffect(() => {
        getApiFunc();
    }, []);
    return (
        <Fragment>
            <div onClick={clickWindow} className={`coin-container ${displayList()}`}>
                <div onClick={stopWindow} className="coin-box">
                    <div className='search'>
                        <Icon className='search-logo' icon="ic:baseline-search" />
                        <input 
                        placeholder='Type your prefered Currency'
                        type="search" 
                        name="search"/>
                    </div>
                    <div className='listed-coins'>
                    {currencies?.map((data, index) =>  (
                        <div className='coins' key={index}>
                                <img src={data.image} alt=""/>
                               <span style={{marginLeft: '10px'}}>
                                {data.name}
                                </span>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
CryptoListTo.prototypes = {
    displayList: PropTypes.any,
    clickWindow: PropTypes.any,
}
export default CryptoListTo;