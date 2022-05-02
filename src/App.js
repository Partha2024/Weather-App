import './App.css';
import Card from "./component/Card";
import Loader from './component/Loader';
import Error from './component/Error';
import Comment from './component/Comment';
import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function App() {

    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState('');

    function getForecast(e) { 
        setLoading(true);    
        setError(false);
        setWeather(null)
        e.preventDefault() 

        

        setTimeout(() => {
            // console.log("clicked")
            const location = e.target.elements.location.value;
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3eeff1f838181bd9fe07fa40d3bb4a61&units=metric`)
                .then((response) => {

                    let sunrise =  new Date(response.data.sys.sunrise*1000).toLocaleTimeString();
                    let sunset =  new Date(response.data.sys.sunset*1000).toLocaleTimeString();

                    setLoading(false)
                    // console.log(response.data)
                    setWeather({
                        descp: response.data.weather[0].description,
                        icon: response.data.weather[0].icon,
                        temp: response.data.main.temp,  
                        maxTemp: response.data.main.temp_max,
                        minTemp: response.data.main.temp_min,
                        city: response.data.name,
                        humidity: response.data.main.humidity,
                        press: response.data.main.pressure, 
                        country : response.data.sys.country,
                        wind: response.data.wind.speed,
                        sunrise: sunrise,
                        sunset: sunset,
                    })

                }).catch(function (error) {
                    if (error.response) {
                        setLoading(false) 
                        setError(true)
                    }
                });
        }, 2000);
        
    }

    return (
        <div className='container'>
            <div className='header'>
                Weather App
            </div>
            <div className='body'> 

                <div className='searchArea'>
                    <form onSubmit={getForecast}>
                        <input type="text" id='searchBar' placeholder="Enter City Name..." name="location" required/>
                        <button id='searchBtn' type="submit">Submit</button>
                    </form>
                </div>

                <div>
                    <div className='cardArea'>
                        {loading ? <Loader/> : weather && <Card weather = {weather}/>}
                        {error ? <Error/> : null}
                    </div>
                </div>

                <div>
                    <div>
                        {loading ? null : weather && <Comment/>}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;