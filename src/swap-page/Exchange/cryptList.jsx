import '../../Styling/exchange.css';
import { Fragment, useEffect, useState } from "react";
import Proptypes from 'prop-types'
import { Icon } from '@iconify/react';
import { cryptoSymbol } from "crypto-symbol";



function CryptoList({ displayList, clickWindow }) {
    const [getCurrency, setCurrency] = useState([]);

    function stopWindow(e) {
        e.stopPropagation();
    }
    useEffect(() => {
        const { get } = cryptoSymbol({});
        setCurrency(Object.keys(get().NSPair))
    }, [])
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
                    {getCurrency.map((data, index) =>  (
                        <div className='coins' key={index}>
                               {<Icon 
                               icon={`simple-icons:${data.toLocaleLowerCase()}`} 
                               />} 
                               {` ${data}`}
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
CryptoList.prototypes = {
    displayList: Proptypes.any,
    clickWindow: Proptypes.any,
}
export default CryptoList;