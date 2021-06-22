import React, { Component } from 'react'
import { Cards, Chart , CountryPicker }  from './components'
import { fetchData } from './api'
import './App.css';
import img from './cv.jpg'
import cv from "./gg.gif"

export default class App extends Component {

  state = {
    data: {},
    country : ''
    
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const fectchData = await fetchData(country);
    this.setState({ data : fectchData , country : country})
  }

  render() {
    const { data  , country} = this.state;

    
    return (
      <div className="container" >
      <div className="con">
        
            <img className="image" src={img} alt="COVID-19" />
          
      </div>
      <Cards data={data} />
      <CountryPicker handleCountryChange ={this.handleCountryChange} />
      <Chart data={data}  country={country}/>
    
    
    </div>
    )
  }
}
