import React, {useState, useEffect} from 'react';
import './CountryDetail.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function CountryDetail({match}) {

    AOS.init({})
    const [country, setCountry] = useState([]);

    useEffect(()=>{
        getCountry();
    }, [])

    async function getCountry(){
        const response = await fetch(`https://coronavirus-19-api.herokuapp.com/countries/${match.params.key}`)
        const data = await response.json();
        console.log(data);
        setCountry(data);
    };

    return (
        <div className="Country_Detail">
            <div className="title_container">
            <h1 data-aos="fade-right" data-aos-duration="500" className="Back-btn">Countries /</h1>
            <h1 data-aos="fade-right" data-aos-duration="500" className="Cty-btn">{country.country}</h1>
            </div>
            <div className="data_container">
                <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="100" className="data_containerSet">
                    <p>Cases: </p>
                    <p>{country.cases}</p>
                </div>
                <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="100" className="data_containerSet">
                    <p>Cases Per Million: </p>
                    <p>{country.casesPerOneMillion}</p>
                </div>
                <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="100" className="data_containerSet">
                    <p>Critical: </p>
                    <p>{country.critical}</p>
                </div>
                <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="100" className="data_containerSet">
                    <p>Deaths: </p>
                    <p>{country.deaths}</p>
                </div>
                <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="100" className="data_containerSet">
                    <p>Deaths Per Million: </p>
                    <p>{country.deathsPerOneMillion}</p>
                </div>
                <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="100" className="data_containerSet">
                    <p>Recovered: </p>
                    <p>{country.recovered}</p>
                </div>
                <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="100" className="data_containerSet">
                    <p>Tests Per Million: </p>
                    <p>{country.testsPerOneMillion}</p>
                </div>
                <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="100" className="data_containerSet">
                    <p>Total Tests: </p>
                    <p>{country.totalTests}</p>
                </div>
            </div>
        </div>
    )
};

export default CountryDetail;