import React, {useState, useEffect} from 'react';
import './Gobal.css';

function Gobal() {
    const [Data, setData] = useState([]);

    useEffect(()=>{
        getProvinces();
    }, [])
  
    async function getProvinces(){
        const response = await fetch("https://api.covid19api.com/summary")
        const data = await response.json();
        console.log(data.Global);
        setData(data.Global);
    };
    return (
        <div className="Gobal">
            <h1 className="hometitle">The Covid19 World Count</h1>
            <div className="gobal_status">
            <p className="totalconf">Total Confirmed: {Data.TotalConfirmed}</p>
            <p className="totaldeat">Total Deaths: {Data.TotalDeaths}</p>
            <p className="totalreco">Total Recovered: {Data.TotalRecovered}</p>
            </div>
        </div>
    )
}

export default Gobal
