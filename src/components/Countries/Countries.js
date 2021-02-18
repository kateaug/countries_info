import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import { Link, useHistory } from 'react-router-dom';
import { Container, Options, Grid } from './styles';
import Spinner from '../Spinner/Spinner';

const Countries = () => {

    const [input, setInput] = useState('');
    const [countriesData, setCountriesData] = useState([]);
    const [defaultCountriesData, setDefaultCountriesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const history = useHistory();


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
                            ) : (countriesData.map((data, index, name ) => (
                            <Link 
                                to={`/${data.name.toLowerCase()}`} 
                                key={data.name}>    
                                    <Country
                                        onClick={() =>
                                            history.push({
                                              pathname: `/:${name}`
                                            })
                                        }
                                        key={index}
                                        flag={data.flag}
                                        name={data.name}
                                        region={data.region}
                                        capital={data.capital}
                                        population={data.population}
                                    />
                             </Link>   
                                
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