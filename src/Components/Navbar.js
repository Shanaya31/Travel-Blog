import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'C:/Button.js';
import 'C:/Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click); 
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRAVL <i className="fab fa-gripfire"></i>
          </Link>

          <div className='menu-icon' onClick={ handleClick }>
            <i className={ click ? 'fas fa-times' : 'fas fa-bars' }></i>
          </div>

          <ul className={ click ? 'nav-menu active': 'nav-menu' }>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={ closeMobileMenu } >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={ closeMobileMenu } >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sign-up' className='nav-links-mobile' onClick={ closeMobileMenu } >
                Sign up
              </Link>
            </li>
          </ul>
          {/* this is the children of Button component that has a buttonStyle */}
          { button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
          </div>

      </nav>
    </>
  )
}

export default Navbar;