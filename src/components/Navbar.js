import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    const [ click, setClick ] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        ST <i className="fab fa-typo3" />
                    </Link>
                    <div className="menu-icon" onCLick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                </div>
                <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about-me" className="nav-links" onClick={closeMobileMenu}>ABOUT ME</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tech" className="nav-links" onClick={closeMobileMenu}>TECH</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>CONTACT</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar