import React, {useState, useEffect} from "react";
import {CountryData} from './TransformDataCountryFunction'
import TagManager from "./TagManager";
import countryToContinent from 'country-json/src/country-by-continent.json' with { type: 'json' };


function countrySelector (){
    const [countries, setcountries] = useState([]);
    const [selectcountry, setSelectCountry] = useState("");

    useEffect(()=> {
        if(countryToContinent){
            setcountries(countryToContinent);
        }
    }, []);
    return (
    <div>
        <h2> Select Country</h2>
        <select 
            value={selectcountry}
            onChange={(e)=> setSelectCountry(e.target.value)}
        > 
        {countries.map((item,index)=>(
            <option 
                key={index} 
                value={item.country}>
                    {item.country} {item.index}
            </option>))}
        </select>
    </div>

)
}

export default countrySelector
