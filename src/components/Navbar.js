import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
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
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <i class='fas fa-moon-stars' />
            </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about-me'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                ABOUT ME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/tech'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                TECH
              </Link>
            </li>

            <li>
              <Link
                to='/contact-me'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                CONTACT ME
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>CONTACT ME</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;