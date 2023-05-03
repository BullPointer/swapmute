

function ExchangeCurrency() {
  
    return(
      <>

  {/* <!-- start of currency exchange --> */}

  <div className="exchange-container">
    <h2>Select currency</h2>
    <div className="exchange-box">
      <div className="exchange">
      <div className="selling">
        <p style={{color: "#fff"}}>Selling</p>
        <p>Available: <span style={{color:"yellow"}}>2 BTC</span></p>
      </div>
      <div className="bitcoin">
        <select>
          <option value="fa-bitcoin-sign">&#Xe0b4; BTC</option>
          <option value="fa-brands fa-bitcoin">&#xf379; BTC</option>
          <option value="fa-brands fa-bitcoin">&#xf379; BTC</option>
          <option value="fa-brands fa-bitcoin">&#xf379; BTC</option>
        </select>
        <span>0.00</span>
      </div>
      <div className="selling">
        <p>Current Rate</p>
        <p><span style={{color: 'green'}}>1 BTC = 27.536.20 USDT</span></p>
      </div>
      </div>
      <i className="fa-solid fa-arrow-right-arrow-left"></i>
      <div className="exchange">
      <div className="selling">
        <p style={{color:"#fff"}}>Buying</p>
        {/* <!-- <p><span style="color: green;">1BTC = 27.536.20 USDT</span></p> --> */}
      </div>
      <div className="bitcoin">
        <select>
          <option value="fa-sharp fa-solid fa-circle-dollar">&#xf2e8; USDT</option>
          <option value="fa-sharp fa-solid fa-circle-dollar">&#xf2e8; USDT</option>
          <option value="fa-sharp fa-solid fa-circle-dollar">&#xf2e8; USDT</option>
          <option value="fa-sharp fa-solid fa-circle-dollar">&#xf2e8; USDT</option>
        </select>
        <span>0.00</span>
      </div>
      <div className="selling">
        <p>Actual fee</p>
        <p><span>1.4%</span></p>
      </div>
      </div>
    </div>
    <a href="#">Exchange</a>
  </div>

  {/* <!-- end of currency exchange --> */}
      </>
    )
  }
  export default ExchangeCurrency;