import React from 'react';
import './Countries.css';
import { useEffect, useState } from 'react';
import Country from './Country';
import Search from './Search';
import Filter from './Filter';
import {Link} from 'react-router-dom';
import CountryDetail from './CountryDetail';

const Countries = () => {

    const [input, setInput] = useState('');
    const [countriesData, setCountriesData] = useState([]);
    const [defaultCountriesData, setDefaultCountriesData] = useState([]);


    const fetchCountries = async () => {
        return await fetch('https://restcountries.eu/rest/v2/all')
          .then(res => res.json())
          .then(data => {
            setCountriesData(data);
            setDefaultCountriesData(data);
            //console.log('DATA >>>>>>', data[0].region);
          })            
    };

    useEffect(() => {

        fetchCountries();

    }, []);

    const loadCountriesByRegion = async (region) => {
        if (region === 'All') {
           return fetchCountries();
        }

        return await fetch(`https://restcountries.eu/rest/v2/region/${region}`)
          .then(res => res.json())
          .then(data => {
            setCountriesData(data);
              console.log('FILTER >>>>>', data);
          });
       
    }

  
    const updateInput = async (input) => {
        const filtered = defaultCountriesData.filter(country => {
            return country.name.toLowerCase().includes(input.toLowerCase())
        })
        
        setInput(input);
        setCountriesData(filtered);

     
    };

    const card = <div className="countries__grid">
                        {!countriesData ? (
                                <div>Error</div>
                            ) : (countriesData.map((data, index ) => (
                                    <Country
                                        key={index}
                                        flag={data.flag}
                                        name={data.name}
                                        region={data.region}
                                        capital={data.capital}
                                        population={data.population}
                                    />
                                
                        )))}
                </div>; 

    return (
        <div className="countries">
            <div className="countries__options">
               
                <Search input={input} onChange={updateInput} /> 
                <Filter filterByRegion={loadCountriesByRegion} />
            </div>
            {/* <Link component={CountryDetail} to={'/detail'} style={{ textDecoration: 'none' }}>{card}</Link> */}

            <Link to="/detail" style={{ textDecoration: 'none' }}>{card}</Link>

               
        </div>
    );
};

export default Countries;