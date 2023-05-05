import { useState } from "react";
import { Icon } from '@iconify/react';
import CryptoList from "./cryptList";


function Send() {
    const [selectCoin, setSelectCoin] = useState(false);
    const [value, setValue] = useState("");

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
    const handleChange = (event) => {
        const regex = /^[0-9]*\.?[0-9]*$/; //  /^[0-9]*\.?[0-9]+$/
        const inputValue = event.target.value;
        if (regex.test(inputValue)) {
          setValue(inputValue);
        }
    };
    return(
        <>
            <CryptoList 
                displayList={displayList}
                clickWindow={clickWindow}
            />
            <div className="exchange">

                <div className="selling">
                    <p style={{color: "#fff"}}>You send</p>
                    <p>Available: <span style={{color:"yellow"}}>2 BTC</span></p>
                </div>
                <div className="bitcoin">
                    <div className="select" onClick={showList}>
                        <div value="fa-brands fa-bitcoin">BTC</div>
                        <Icon icon="material-symbols:arrow-drop-down-circle-outline" />
                    </div>
                    <input 
                    className="amount"
                    placeholder="0.00"
                    type="text" 
                    value={value} 
                    id="amount"
                    onChange={handleChange} 
                    />
                </div>

                <div className="selling">
                    <p>Current Rate</p>
                    <p><span style={{color: 'green'}}>1 BTC = 27.536.20 USDT</span></p>
                </div>

            </div>
        </>
    )
}
export default Send;