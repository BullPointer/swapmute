import './App.css';
import Navbar from './navbar/navbar';
import StartTutorial from './components/startTutorial';
import ExchangeCurrency from './components/startCurrencyX';
import FaQ from './components/faq';
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
