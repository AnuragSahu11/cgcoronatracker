import React from 'react';
import '../css/_card.scss'
import CountUp from 'react-countup';

function Counters({styleProp,cases,info}){
    
    const val = cases;
    console.log(val)
    const int = cases-val;
    return(
        <div className={"card col-1-of-4 "+styleProp}>
            <div className="card__side card__side-front">
                <p className="card__para-1">{info}</p>
                <p className="card__para-2">{<CountUp start={int} redraw={true} end={cases} />}</p>
            </div>
           
        </div>
    )
}

export default Counters