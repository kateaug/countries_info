import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const CountryDetail = () => {
    const [country, setCountry] = useState([]);
    const { name } = useParams();
    const history = useHistory();

    const loadCountry = async (name) => {
        return await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
          .then(res => res.json())
          .then(data => {
              console.log('DETAIL', data)
              setCountry(data);
          })
          .catch(err => console.log(err))
    };

    useEffect(() => {
        loadCountry(name);

    }, [name]);

    return country.map(
        ({
          borders,
          capital,
          currencies,
          flag,
          name,
          nativeName,
          population,
          region,
          subregion
        }) => (
          <div key={name}>
            <img src={flag} alt='flag' />
            <h3>Country Name: {name}</h3>
            <div>Capital: {capital}</div>
            <div>Region: {region}</div>
            <div>Subregion: {subregion}</div>
            <div>Population: {population}</div>
            <div>Native Name: {nativeName}</div>
            <div>
              Currencies: {currencies.map(({ symbol }) => symbol).join(", ")}
            </div>
            <div>Borders: {borders.join(", ")}</div>
            <button type="button" onClick={history.goBack}>
              Back
            </button>
          </div>
        )
    );
};

export default CountryDetail;