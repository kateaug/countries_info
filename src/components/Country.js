import React from 'react';
import './Country.css';

const Country = ({ flag, alt, name, population, region, capital }) => {
    

    return (
        <div className="country">
            <img src={flag} className="country__flag" alt={alt} />
            <div className="country__details">
                <h3>{name}</h3>
                <span><strong>Population:</strong>{population}</span>
                <span><strong>Region:</strong>{region}</span>
                <span><strong>Capital:</strong>{capital}</span>
            </div>
            
        </div>
    );
};

export default Country;
