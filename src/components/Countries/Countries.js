import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import { Link } from 'react-router-dom';
import { Container, Options, Grid } from './styles';

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

    const card = <Grid>
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
                </Grid>; 

    return (
        <Container>
            <Options>          
                <Search input={input} onChange={updateInput} /> 
                <Filter filterByRegion={loadCountriesByRegion} />
            </Options> 
            <Link to='/detail' style={{ textDecoration: 'none' }}>{card}</Link>      
        </Container>
    );
};

export default Countries;