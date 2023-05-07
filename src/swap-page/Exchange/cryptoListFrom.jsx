/* eslint-disable react/prop-types */
import '../../Styling/exchange.css';
import { Fragment, useEffect, useState } from "react";
import returnError from '../../handleApi/errorResponse';
import { getApi } from '../../handleApi/currencyApi';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';


function CryptoListFrom({ displayList, clickWindow}) {

    const [currencies, setCurrencies] = useState([]);

    function stopWindow(e) {
        e.stopPropagation();
    }

    async function getApiFunc() {
      const link = 'https://api.simpleswap.io/get_all_currencies';
      const result = await getApi(link)
      if(result.status === 200) {
        setCurrencies(result.data);
      } else {
        console.log(returnError(result.response));
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
CryptoListFrom.prototypes = {
    displayList: PropTypes.any,
    clickWindow: PropTypes.any,
}
export default CryptoListFrom;