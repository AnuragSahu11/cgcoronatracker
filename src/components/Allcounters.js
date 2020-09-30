import React from 'react';
import Counters from './Counters';
import '../css/_allcounter.scss'


function Allcounters({active,deceased,confirmed,recovered}){
    return(
        <div className="allcounter">
            <Counters  info="confirmed" cases={confirmed} styleProp="card__1" />
            <Counters  info="active" cases={active} styleProp="card__2" />
            <Counters  info="recovered" cases={recovered} styleProp="card__3" />
            <Counters  info="deceased" cases={deceased} styleProp="card__4" />
        </div>
    )
}

export default Allcounters