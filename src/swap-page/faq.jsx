import { useState } from 'react';
import faq from './database/faq';
import Faqtext from './faqtext';


function FaQ() {
  // start of responsive faq drop down

  const [clickedIndex, setClickedIndex] = useState({
    currentObj: null, faq: [...faq]
  });

  function handleClick(index){
    setClickedIndex({...clickedIndex, currentObj: clickedIndex.faq[index]});
    if (clickedIndex.faq[index] === clickedIndex.currentObj) {
      setClickedIndex({...clickedIndex, currentObj: null});
    } else {
      setClickedIndex({...clickedIndex, currentObj: clickedIndex.faq[index]});
    }
  }
  function toggle(index) {
    return (clickedIndex.faq[index] === clickedIndex.currentObj) ? 'active' : 'none';
  }

  // end of responsive faq drop down
    return(
      <>
      {/* <!-- start of FAQ section --> */}
    <div className='accordion' id="FAQ">
      <p className={'p'}>Do you have any questions?</p>
      
      {clickedIndex.faq.map((data, index) => (
        <Faqtext 
        key={index}
        handleClick={handleClick} 
        toggle={toggle}
        data={data} 
        index={index}
        />
      ))}
    </div>
    
    {/* <!-- end of FAQ section --> */}
      </>
    )
  }
  export default FaQ;