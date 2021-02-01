import React, { useState } from 'react'
import {useLazyQuery} from '@apollo/client'
import { GET_WEATHER_QUERY } from '../graphql/Queries'

//with uselazy we make the function to call when we make the query (getWeather)
//2 reponses at the start are loading and error. both are boolean
//other is data, which is the actual variable one that receives the weather 

function Home() {
    const [citySearched, setCitySearched] = useState("")
    const [getWeather, {loading, data, error}] = useLazyQuery(GET_WEATHER_QUERY, {
        variables: { name: citySearched}
    })

    if  (error) {
        return <h1>Error Found</h1>
    }
    if (data) {
        console.log(data)
    }
    return (
        <div className="home">
            <h1>Search for weather</h1>
            <input type="text" placeholder="city name..." onChange={(event) => {setCitySearched(event.target.value);}}></input>    
            <button onClick={() => getWeather()}> Search</button>
            <div className="weather">
                {data && (
                <>
                    <h1> City Name: {data.getCityByName.name} </h1>
                    <h1> Temperature: {data.getCityByName.weather.temperature.actual} </h1>
                    <h1> Description  {data.getCityByName.weather.summary.description}</h1>
                    <h1> Wind Speed {data.getCityByName.weather.wind.speed} </h1>
                </>
                )}
            </div>
        </div>
    )
}

export default Home
