import React, {useState} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
 const [darkMode, setDarkMode] = useState(false);

 const toggleMode = (e) => {
     setDarkMode(!darkMode);
     console.log(e);
 };

 return (
    <Link to="/" style={{ textDecoration: 'none' }}>
     <header className="header">
         <h1 className="header__title">Where in the world?</h1>
         <button type="button" className="header__mode" onClick={toggleMode}>
            <FontAwesomeIcon icon={faMoon} />
             Mode
         </button>
     </header>
     </Link>
 );
};

export default Header;