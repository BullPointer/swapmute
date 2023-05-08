/* eslint-disable react/prop-types */
import { useState } from "react";
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import ErrorBoundary from "../../ErrorBoundary";
import CryptoListFrom from "./cryptoListFrom";


function Send({
    sendCurrency, 
    receiveCurrency,
    handleChange, 
    value, 
    valueError, 
    handleClick, 
    handleFocus,
    maxRange
}) {
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
            <ErrorBoundary fallback='check send function for error'>
                <CryptoListFrom 
                    displayList={displayList}
                    clickWindow={clickWindow}
                    handleClick={handleClick}
                />
            </ErrorBoundary>
            <div className="exchange">

                <div className="selling">
                    <p style={{color: "#fff"}}>You send</p>
                    <p>Available: 
                        <span style={{color:"yellow"}}> {maxRange && maxRange } </span> 
                        <span style={{color:"yellow"}}>
                            {sendCurrency['symbol'] 
                        &&  sendCurrency['symbol'].toUpperCase()}</span>
                    </p>
                </div>
                <div className="bitcoin">
                    <div className="select" onClick={showList}>
                        <div className="symbol" value="fa-brands fa-bitcoin">
                        {sendCurrency['symbol'] && sendCurrency['symbol'].toUpperCase()}
                        </div>
                        <Icon icon="material-symbols:arrow-drop-down-circle-outline" />
                    </div>
                    <input 
                    className="amount"
                    placeholder="0.00"
                    type="text" 
                    value={value}
                    onChange={handleChange} 
                    onFocus={handleFocus}
                    />
                </div>
                {valueError && <div className="value-error">{valueError}</div>}
                <div className="selling">
                    <p>Current Rate</p>
                    <p><span style={{color: 'green'}}>
                    1 {sendCurrency['symbol'] && sendCurrency['symbol'].toUpperCase()} 
                    = 27.536.20 {receiveCurrency['symbol'] && receiveCurrency['symbol'].toUpperCase()}
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
    handleClick: PropTypes.any,
    receiveCurrency: PropTypes.object,
    maxRange: PropTypes.any,
}
export default Send;