import Recieve from "./Exchange/recieve";
import Send from "./Exchange/send";

function ExchangeCurrency() {
  
    return(
      <>
        {/* <!-- start of currency exchange --> */}

        <div className="exchange-container">
          
          <h2>Select currency</h2>
          <div className="exchange-box">
            <Send />
            <Recieve />
            <i className="fa-solid fa-arrow-right-arrow-left"></i>
          </div>
          <a href="#">Exchange</a>

        </div>

        {/* <!-- end of currency exchange --> */}
      </>
    )
  }
  export default ExchangeCurrency;