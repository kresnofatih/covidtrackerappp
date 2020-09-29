import React from 'react';
import './Province.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Province({cname, cdate, totc, totd, totr}) {
    return (
        <div data-aos="fade-right" data-aos-duration="500" className="province">
            <div className="province_contents">
                <h1 className="province_title">{cname}</h1>
                <p>{cdate}</p>
                <p>{totc}</p>
                <p>{totd}</p>
                <p>{totr}</p>
                <ArrowForwardIosIcon className="Arrow"/>
            </div>
        </div>
    )
}

export default Province