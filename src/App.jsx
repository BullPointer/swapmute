import './App.css';
import Navbar from './navbar/navbar';
import StartTutorial from './swap-page/startTutorial';
import ExchangeCurrency from './swap-page/startCurrencyX';
import FaQ from './swap-page/faq';
import Footer from './footer/footer';
import CryptoSymbols from './cryptoSymbols';


function App() {

  return (
    <>
      <CryptoSymbols />
      <Navbar/>
      <StartTutorial/>
      <ExchangeCurrency/>
      <FaQ/>
      <Footer/>
    </>
  )
}

export default App
