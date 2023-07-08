import { useState } from "react";
import { faqData } from "./database/faq";
import Faqtext from "./faqtext";

function FaQ() {
  // start of responsive faq drop down

  const [clickedIndex, setClickedIndex] = useState({
    currentObj: null,
    faq: { ...faqData },
  });

  function handleClick(index, key) {
    const { faq } = clickedIndex;
    setClickedIndex({ ...clickedIndex, currentObj: faq[key][index] });
    if (clickedIndex.faq[key][index] === clickedIndex.currentObj) {
      setClickedIndex({ ...clickedIndex, currentObj: null });
    } else {
      setClickedIndex({ ...clickedIndex, currentObj: faq[key][index] });
    }
  }
  function toggle(index, key) {
    return clickedIndex.faq[key][index] === clickedIndex.currentObj
      ? "active"
      : "none";
  }

  // end of responsive faq drop down
  return (
    <>
      {/* <!-- start of FAQ section --> */}
      <div className="accordion" id="FAQ">
        <p className={"p"}>Do you have any questions?</p>
        <div>
          <div className="mt-5 mx-5 p-2 text-2xl text-red-100">About</div>
          {faqData.about.map((data, index) => (
            <Faqtext
              key={index}
              handleClick={handleClick}
              keytext={"about"}
              toggle={toggle}
              data={data}
              index={index}
            />
          ))}
          <div className="mt-5 mx-5 p-2 text-2xl text-red-100">
            Cryptocurrency Exchange Process
          </div>
          {faqData.cryptocurrencyExchangeProcess.map((data, index) => (
            <Faqtext
              key={index}
              handleClick={handleClick}
              keytext={"cryptocurrencyExchangeProcess"}
              toggle={toggle}
              data={data}
              index={index}
            />
          ))}
          <div className="mt-5 mx-5 p-2 text-2xl text-red-100">
            Buy Crypto With Fiat
          </div>
          {faqData.buyCryptoWithFiat.map((data, index) => (
            <Faqtext
              key={index}
              handleClick={handleClick}
              keytext={"buyCryptoWithFiat"}
              toggle={toggle}
              data={data}
              index={index}
            />
          ))}
          <div className="mt-5 mx-5 p-2 text-2xl text-red-100">KYC/AML</div>
          {faqData.KycOrAml.map((data, index) => (
            <Faqtext
              key={index}
              handleClick={handleClick}
              keytext={"KycOrAml"}
              toggle={toggle}
              data={data}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* <!-- end of FAQ section --> */}
    </>
  );
}
export default FaQ;
