import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Flag, Details, CountryInfo, Borders } from './styles'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Spinner from '../Spinner/Spinner';


const CountryDetail = () => {
    const [country, setCountry] = useState([]);
    const [loading, setLoading] = useState(true);

    const { name } = useParams();

    const loadCountry = async () => {
        if (name.length < 4) {
            return await fetch(`https://restcountries.eu/rest/v2/alpha/${name}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setCountry(data);
                console.log('DETAIL >>>>', data);
            })
            .catch(err => console.log(err))

        } else {
            return await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setCountry(data[0]);
                console.log('DETAIL >>>>', data);
            })
            .catch(err => console.log(err))
        }
        
        
    };

    useEffect(() => {
        loadCountry();

    }, []);

    useEffect(() => {
        loadCountry();

    }, [name]);


    return (loading ? <Spinner /> : (
            <Container>
                <Flag>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <button type='button'>
                            <FontAwesomeIcon icon={faArrowLeft} />
                            Back
                        </button>
                    </Link>
                    <img src={country?.flag} alt='flag'/>
                </Flag>
                <Details>
                    <h3><strong>{country?.name}</strong></h3>
                    <CountryInfo>
                        <span><strong>Native Name: </strong>{country?.nativeName}</span>
                        <span><strong>Capital: </strong>{country?.capital}</span>
                        <span><strong>Region: </strong>{country?.region}</span>
                        <span><strong>Subregion: </strong>{country?.subregion}</span>
                        <span><strong>Population: </strong>{country?.population}</span>
                        <span><strong>Top Level Domain: </strong>{country?.topLevelDomain}</span>
                        <span><strong>Languages: </strong>{country?.languages?.map(lang => lang.name).join(', ')}</span>
                        <span><strong>Currencies: </strong>{country?.currencies?.map(({ symbol }) => symbol).join(', ')}</span>
                    </CountryInfo>
                     { country?.borders && country?.borders.length > 0 ? (
                        <Borders>
                             <strong>Border Countries:</strong>
                             <div>
                                { country?.borders.map(border => (
                                    <Link to={'/' + border} key={border}>
                                        {border}        
                                    </Link>                             
                                ))}
                             </div>
                        </Borders> 
                    ) : <div></div> }             
                </Details>
            </Container>
    ));
};

export default CountryDetail;