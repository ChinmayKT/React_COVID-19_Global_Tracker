import React from 'react'
import {Card , CardContent , Typography , Grid} from '@material-ui/core'
import  './Cards.css'

import Countup from 'react-countup'

const Cards = (props) => {
    const {confirmed , recovered , deaths , lastUpdate} = props.data
    console.log(confirmed)

    if(!confirmed){
        return "loading..."
    }
    

    return (
        <div className="container" >
            <Grid container spacing={3} justify="center" >
                <Grid  item component={Card} xs={12} md={3} className="infected " >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom >Infected</Typography>
                        
                       <Countup
                        start={0}
                        end = {confirmed.value}
                        duration = {5}
                        separator = ','
                       />

                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>

                        
                        <Typography variant="body2" >No of active cases of Covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid  item component={Card} xs={12} md={3} className ="recovered" >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom >Recovered</Typography>
                        
                        <Countup
                        start={0}
                        end = {recovered.value}
                        duration = {5}
                        separator = ','
                       />

                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>

                        
                        <Typography variant="body2" >No of Recovered cases of Covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid  item component={Card} xs={12} md={3} className="deaths" >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom >Deaths</Typography>
                        
                        <Countup
                        start={0}
                        end = {deaths.value}
                        duration = {5}
                        separator = ','
                       />

                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>

                        
                        <Typography variant="body2" >No of Deaths by Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
