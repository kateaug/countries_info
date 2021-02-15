import React from 'react';
import { Container, Details } from './styles';

const Country = ({ flag, alt, name, population, region, capital }) => {
    

    return (
        <Container>
            <img src={flag} className="country__flag" alt={alt} />   
            <Details>
                <h3>{name}</h3>
                <span><strong>Population:</strong>{population}</span>
                <span><strong>Region:</strong>{region}</span>
                <span><strong>Capital:</strong>{capital}</span>
            </Details>           
        </Container>
    );
};

export default Country;
