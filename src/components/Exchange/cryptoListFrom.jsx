/* eslint-disable react/prop-types */
import '../../Styling/exchange.css';
import { Fragment, useEffect, useState } from "react";
import returnError from '../../handleApi/errorResponse';
import { getApi } from '../../handleApi/currencyApi';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';


function CryptoListFrom({ displayList, clickWindow, handleClick}) {

    const [currencies, setCurrencies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const stopWindow = (e) => e.stopPropagation();
    
    async function getApiFunc() {
      const link = 'https://api.simpleswap.io/get_all_currencies';
      const result = await getApi(link)
      if(result.status === 200) {
        setCurrencies(result.data);
      } else {
        console.log(returnError(result.response));
      }
    }
    const handleChange = ({target}) => setSearchValue(target.value);

    const filtered = currencies.filter((data) => {
        return data.name.toLowerCase().includes(searchValue.toLowerCase());
    })


    useEffect(() => {
        getApiFunc();
        // console.log(currencies);
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
                        name="search"
                        value={searchValue}
                        onChange={handleChange}
                        />
                    </div>
                    <div className='listed-coins'>
                    {filtered?.map((data, index) =>  (
                        <div 
                        key={index}
                        onClick={() => handleClick(data)} 
                        className='coins'>
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
    handleClick: PropTypes.any,
}
export default CryptoListFrom;