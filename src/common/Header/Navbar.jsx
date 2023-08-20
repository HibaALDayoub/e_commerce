import React from 'react'
import logo from '../../images/llogo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useShoppingCart } from "../../context/ShoppingCartContext"


const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  const [MobileMenu, setMobileMenu] = useState(false)

  return (
    <div>
      <>
        <header className='header'>
          <div className='container d_flex'>
            <div className='catgrories d_flex'>
              <span class='fa-solid fa-border-all'></span>
              <h4>
                Categories <i className='fa fa-chevron-down'></i>
              </h4>
            </div>
            <div className='navlink'>
              <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                    <img src={logo} alt='' style={{width: '124px' , height: '53px' , objectFit:'contain'}}/>
                    <Link to = 'cart'>
                        <i className='fa fa-shopping-bag icon-circle'></i>
                    </Link>
                    <span><h2>{cartQuantity}</h2></span>
              </ul>
              <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
                {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
              </button>
            </div>
          </div>
        </header>
      </>
    </div>
  )
}
export default Navbar