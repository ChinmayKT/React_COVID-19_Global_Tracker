import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import {fetchCountries} from '../../api/index'

import './Country.css'
const CountryPicker = ({handleCountryChange}) => {

  const [ fetchedCountries , setFetchCountries] = useState([])

  useEffect(()=>{
    const fetchAPI = async () =>{
      setFetchCountries(await fetchCountries())
    }

    fetchAPI()
  },[])

 console.log(fetchedCountries)
  return (
    <FormControl className="formcontrol">
      <NativeSelect defaultValue="" onChange= {(e)=> handleCountryChange(e.target.value)} >
        <option>Global</option>
        {fetchedCountries.map((country, i)=> <option key={i} value={country} >{country}</option> )}
    
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;