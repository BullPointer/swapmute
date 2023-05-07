/* eslint-disable react/prop-types */
import { useState } from "react";
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import ErrorBoundary from "../../ErrorBoundary";
import CryptoListFrom from "./cryptoListFrom";


function Send({sendCurrency, handleChange, value, valueError}) {
    const [selectCoin, setSelectCoin] = useState(false);


    function showList(e) {
        e.stopPropagation();
        setSelectCoin(true);
    }

    function clickWindow() {
        setSelectCoin(false)
    }

    function displayList() {
        return selectCoin ? 'list' : 'none';
    }

    return(
        <>
            <ErrorBoundary fallback='Check send component for any error'>
                <CryptoListFrom 
                    displayList={displayList}
                    clickWindow={clickWindow}
                />
            </ErrorBoundary>
            <div className="exchange">

                <div className="selling">
                    <p style={{color: "#fff"}}>You send</p>
                    <p>Available: <span style={{color:"yellow"}}>2 BTC</span></p>
                </div>
                <div className="bitcoin">
                    <div className="select" onClick={showList}>
                        <div value="fa-brands fa-bitcoin">
                        {sendCurrency['symbol'].toUpperCase()}
                        </div>
                        <Icon icon="material-symbols:arrow-drop-down-circle-outline" />
                    </div>
                    <input 
                    className="amount"
                    placeholder="0.00"
                    type="text" 
                    value={value}
                    onChange={handleChange} 
                    />
                </div>
                {valueError && <div className="value-error">{valueError}</div>}
                <div className="selling">
                    <p>Current Rate</p>
                    <p><span style={{color: 'green'}}>
                    1 {sendCurrency['symbol'].toUpperCase()} 
                    = 27.536.20 USDT
                    </span></p>
                </div>

            </div>
        </>
    ) 
}
Send.prototype = {
    sendCurrency: PropTypes.object,
    symbol: PropTypes.string,
    value: PropTypes.string,
    valueError: PropTypes.string,
}
export default Send;