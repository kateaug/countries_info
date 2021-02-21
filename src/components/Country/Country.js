import React from 'react';
import { Container, Details } from './styles';
import { Link } from 'react-router-dom';


const Country = ({ country}) => {
    

    return (    
        <Container>
            <Link to={country.alpha3Code}>
                <img src={country.flag} className="country__flag" alt='flag' />   
                <Details>
                    <h3>{country.name}</h3>
                    <span><strong>Population:</strong>{country.population}</span>
                    <span><strong>Region:</strong>{country.region}</span>
                    <span><strong>Capital:</strong>{country.capital}</span>
                </Details> 
            </Link>          
        </Container>
      
    );
};

export default Country;
