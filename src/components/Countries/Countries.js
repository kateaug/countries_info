import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import { Container, Options, Grid } from './styles';
import Spinner from '../Spinner/Spinner';

const Countries = () => {

    const [input, setInput] = useState('');
    const [countriesData, setCountriesData] = useState([]);
    const [defaultCountriesData, setDefaultCountriesData] = useState([]);
    const [loading, setLoading] = useState(true);
    

    const fetchCountries = async () => {
        return await fetch('https://restcountries.eu/rest/v2/all')
          .then(res => res.json())
          .then(data => {
            setLoading(false);  
            setCountriesData(data);
            setDefaultCountriesData(data);
            setInput('');
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
            setInput('');
          });       
    }

  
    const updateInput = async (input) => {
        const filtered = defaultCountriesData.filter(country => {
            return country.name.toLowerCase().includes(input.toLowerCase())
        })
        
        setInput(input);
        setCountriesData(filtered); 
    };

    const clearInput = async () => {
        setInput('');
        const resetted = defaultCountriesData;
        setCountriesData(resetted);
    };

    
    const card = <Grid>
                        {!countriesData ? (
                                <div>Something went wrong... Try again!</div>
                            ) : (
                                countriesData.map((country) => (
                                <Country key={country.alpha3Code} country={country}/>
                                                     
                        )))}
                </Grid>; 

    return (
        <Container>
            <Options>          
                <Search input={input} onChange={updateInput} onClick={clearInput}/> 
                <Filter filterByRegion={loadCountriesByRegion} />
            </Options> 
             { loading ? <Spinner /> : card }            
        </Container>
    );
};

export default Countries;