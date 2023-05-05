import { useState } from "react";
import { Icon } from '@iconify/react';
import CryptoList from "./cryptList";

function Recieve() {
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
                <p style={{color:"#fff"}}>You get</p>
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
                <p>Actual fee</p>
                <p><span>1.4%</span></p>
            </div>

        </div>
        </>
    )
}
export default Recieve;