import React, {useState, useEffect} from 'react';
import './Indonesia.css';
import Province from './Province';
import {Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Indonesia() {
    AOS.init({})
    const navStyle = {
        textDecoration: "none"
    }

    const [provinces, setProvinces] = useState([]);

    useEffect(()=>{
        getProvinces();
    }, [])

    async function getProvinces(){
        const response = await fetch("https://api.covid19api.com/summary")
        const data = await response.json();
        console.log(data);
        setProvinces(data.Countries);
    };

    return (
        <div className="Indonesia">
            <h1 className="Countries_title">by Country</h1>
            <div data-aos="fade-right" data-aos-duration="500" className="col">
                <p className="col_cont">Country</p>
                <p className="col_dat">Date</p>
                <p className="col_det">Total Confirmed</p>
                <p className="col_col">Total Deaths</p>
                <p className="col_col">Total Recovered</p>
            </div>
            <div className="container">
                {provinces.map(province =>(
                    <Link to={`/countries/${province.Country}`} style={navStyle}>
                    <Province
                    key={province.Country}
                    cname={province.Country}
                    cdate={province.Date.substr(0, 10)}
                    totc={province.TotalConfirmed}
                    totd={province.TotalDeaths}
                    totr={province.TotalRecovered}
                    />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Indonesia;
