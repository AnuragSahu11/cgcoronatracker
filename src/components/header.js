import React from 'react';
import '../css/_header.scss'

function Header({districtName,handleChange}){
    districtName[0]="Select District"
    let optionItems = districtName.map((name,i) =>
            <option value={name}>{name}</option>)
    
    return(
        <section className="header">
            <div className="header__heading">
                <h1 className="header__heading-h1">
                    Chhattisgarh
                </h1>
                <hr className="hr"/>
                <h1 className="header__heading-h1">
                    Coronameter
                </h1>
            </div>
            <div className="header__heading">
            <div className="header__dropdown">
                    
                    <select
                    onChange={handleChange}>
                       {optionItems}
                    </select>
                </div>
            </div>
        </section>
    )
}

export default Header