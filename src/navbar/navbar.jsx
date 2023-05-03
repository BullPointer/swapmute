import { useState } from 'react'


function Navbar() {
  const [btnState, setBtnState] = useState({opend: false});

  // for responsive navigation bar
  const toggle = () => {
    setBtnState(btnState => !btnState);
  }
  let toggleClass = btnState ? 'active' : '';
// end of responsive navigation bar
  return(
    <>
    {/* <!-- start of navigation --> */}

      <div className="navbar">
        <h2>© SWAPMUTE</h2>
        <nav className="nav">
          <ul className="ul">
            <li><a href="#">Support</a></li>
            <li><a href="#" className="active">Exchange</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </nav>
        <div 
        className={`toggle ${toggleClass}`} 
        onClick={() => toggle()}
        ></div>
      </div>
    {/* <!-- end of navigation --> */}
    </>
  )
}
export default Navbar;