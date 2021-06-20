import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        // 1 method
        // const {data } = await axios.get(url)
        // const modifiedData ={
        //     confirmed : data.confirmed ,
        //     recovered : data.recovered ,
        //     deaths : data.deaths,
        //     lastUpdate : data.lastUpdate
        // }

        // const modifiedData ={ confirmed ,recovered ,deaths,lastUpdate }

        // return modified
        // 2 method
        const {data : {confirmed , recovered , deaths ,lastUpdate}} = await axios.get(url)
        
    
        

        return { confirmed ,recovered ,deaths,lastUpdate }
        
    } catch (error) {
        console.log(error)
    }
}

export  const fetchDailyData = async () => {
    try {
        const {data } = await axios.get(`https://covid19.mathdro.id/api/daily`)
        const modifiedData = data.map((dailyData) => ({
            confirmed : dailyData.confirmed.total,
            deaths : dailyData.deaths.total,
            date : dailyData.reportDate

        }))

        return  modifiedData
    } catch (error) {
        console.log(error)
    }
}


export const fetchCountries = async () => {
    try {
      const { data: { countries } } = await axios.get(`${url}/countries`);
  
      return countries.map((country) => country.name);
    } catch (error) {
      return error;
    }
  };