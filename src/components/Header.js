import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';


const Header = () => {
 return (
    <Link to="/" style={{ textDecoration: 'none' }}>
     <header className="header">
         <h1 className="header__title">Where in the world?</h1>
         <div className="header__mode">Dark Mode Switch</div>
     </header>
     </Link>
 );
};

export default Header;