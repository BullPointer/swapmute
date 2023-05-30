/* eslint-disable react/prop-types */
import { useState } from "react";
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import ErrorBoundary from "../../ErrorBoundary";
import CryptoListTo from "./cryptListTo";

function Recieve({receiveCurrency, value, isLoading, handleClick}) {
    const [selectCoin, setSelectCoin] = useState(false);
    const loading = <Icon style={{padding: '0', fontSize: '30px'}} className="amount" icon="streamline:interface-page-controller-loading-3-progress-loading-dot-load-wait-waiting" />


    function showList(e) {
        e.stopPropagation();
        setSelectCoin(true);
    }

    function clickWindow() {
        setSelectCoin(false)
    }
    function displayList() {
        return selectCoin ? 'list' : '';
    }

    return(
        <>
            <ErrorBoundary fallback='check receive function for error'>
                <CryptoListTo 
                    handleClick={handleClick}
                    displayList={displayList}
                    clickWindow={clickWindow}
                />
            </ErrorBoundary>
        <div className="exchange">

            <div className="selling">
                <p style={{color:"#fff"}}>You get</p>
            </div>

            <div className="bitcoin">
                <div className="select" onClick={showList}>
                    <div value="fa-brands fa-bitcoin">
                        {receiveCurrency['symbol'].toUpperCase()}
                    </div>
                    <Icon icon="material-symbols:arrow-drop-down-circle-outline" />
                </div>
                {
                    isLoading === true ? loading : <input 
                    className="amount"
                    placeholder="0.00"
                    type="text" 
                    value={value} 
                    id="amount"
                    name="receiveAmount"
                    disabled
                    />
                }
                    
            </div>

            <div className="selling">
                <p>Fees included</p>
            </div>

        </div>
        </>
    )
}

Recieve.prototype = {
    receiveCurrencyData: PropTypes.object,
    receiveCurrency: PropTypes.string,
    isLoading: PropTypes.bool,
    handleClick: PropTypes.any,
}
export default Recieve;