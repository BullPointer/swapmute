import { Icon } from '@iconify/react';

function Footer() {
  
    return(
    <>
    {/* <!-- start of footer --> */}
    <footer>
        <div className="copy-right">
            <h1>© SWAPMUTE</h1>
            <p style={{padding: "22px 0"}}>SwapMute is a user-friendly and efficient crytocurrency exchange platform that enable customers to instanty and seamlessly swap coins.</p>
            <p>Contact Us: support@swapmute.com</p>
            <p style={{paddingTop: "35px"}}>Copyright © 2023 <span>SWAPMUTE</span> All rights reserved</p>
        </div>

        <div className="Disclaimer">
            <h3>Disclaimer</h3>
        </div>

        <div className="about">
            <h3>About Us</h3>
        </div>

        <div className="Company">
            <h3>Company</h3>
            <ul>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy policy</a></li>
            </ul>
        </div>
    
        <div className="social-media">
            <h3>Social Media</h3>
            <p>If you to stay up-to-date with the latest news. updates, and promotions from our platform, be sure to follow us on social media</p>
            <ul>
            <li><a href="#">
                <Icon 
                    className="fa-brands"
                    icon="radix-icons:linkedin-logo" 
                />
            </a></li>                
            <li><a href="#">
                <Icon 
                    className="fa-brands"
                    icon="iconoir:twitter" 
                />
            </a></li>                
            <li><a href="#">
                <Icon 
                    className="fa-brands"
                    icon="jam:instagram" 
                />
            </a></li>                   
            <li><a href="#">
                <Icon 
                    className="fa-brands"
                    icon="akar-icons:facebook-fill"
                />
            </a></li>   
            </ul>
            <a href="#" className="a">Exchange</a>
        </div>
    </footer>

    {/* <!-- end of footer --> */}
    </>
    )
  }
  export default Footer;