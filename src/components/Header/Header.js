import React, { useContext } from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'




const Header = ( {toggleThemes} ) => {

  const { name } = useContext(ThemeContext);

  return (
    
     <Container>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <h1>Where in the world?</h1>
            </Link>
            <button onClick={toggleThemes}>
               {name === 'light' ? (
                        <>
                            <FontAwesomeIcon icon={faSun} /> <span>Light Mode</span>

                        </>
                    ) : (
                        <>
                            <FontAwesomeIcon icon={faMoon} /> <span>Dark Mode</span>
                        </>
                )}
            </button>

     </Container>
     
 );
};

export default Header;