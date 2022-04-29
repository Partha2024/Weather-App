import './App.css';
import Card from "./component/Card";
import React from 'react'
import { useState } from 'react'
import axios from 'axios'

// export default function App() {

//     const [weather, setWeather] = useState('');
//     const [city, setCity] = useState('');
//     // const APIKEY = "3eeff1f838181bd9fe07fa40d3bb4a61";

//     const apiCall = async (e) => {
//         e.preventDefault()
//         const location = e.target.elements.location.value;
//         const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3eeff1f838181bd9fe07fa40d3bb4a61`);
//         console.log(res)
        // setWeather({
        //     descp: res.data.weather[0].description,
        //     temp: res.data.main.temp,
        //     maxTemp: res.data.main.temp_max,
        //     minTemp: res.data.main.temp_min,
        //     city: res.data.name,
        //     humidity: res.data.main.humidity,
        //     press: res.data.main.pressure,
        //     country : res.data.sys.country,
        //     wind: res.data.wind.speed,
        //     sunrise: res.data.sys.sunrise,
        //     sunset: res.data.sys.sunset,
        // })
//         setCity(res.data.name)
//     }

//     return (
//     <div className='container'>

//         <div className='header'>
//             Weather App
//         </div>

//         <div className='body'> 

//             <div className='searchArea'>
//                 <form onSubmit={apiCall} className="form">
//                     <input type="text" id='searchBar' placeholder="Enter City Name..." name="location" required/>
//                     <button className="bttn" id='searchBtn'>Search</button>
//                 </form>
//             </div>

//             <div className='cardArea'>
//                 {/* {weather && <Card weather = {weather}/>} */}
//                 <Card weather = {weather}/>
//             </div>

//             {/* <div className='commentArea'>   
//                 <Comment/>
//             </div> */}

//         </div>

//     </div>
    
// )
// }





function App() {

    let [responseObj, setResponseObj] = useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState('');

    function getForecast(e) {     
        e.preventDefault() 
        console.log("clicked")
        const location = e.target.elements.location.value;
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3eeff1f838181bd9fe07fa40d3bb4a61&units=metric`)
            .then((response) => {
                
                setResponseObj(response)
                console.log(response.data)
                console.log(response.data.weather[0].description)

                setWeather({
                    descp: response.data.weather[0].description,
                    temp: response.data.main.temp,
                    maxTemp: response.data.main.temp_max,
                    minTemp: response.data.main.temp_min,
                    city: response.data.name,
                    humidity: response.data.main.humidity,
                    press: response.data.main.pressure,
                    country : response.data.sys.country,
                    wind: response.data.wind.speed,
                    sunrise: response.data.sys.sunrise,
                    sunset: response.data.sys.sunset,
                })

                if(response.data.cod == 400){
                    console.log("Please Enter City")

                }

            })

            // .catch(function (error) {
            //     console.error(error);
            // });

            

            
    }

    function loader(){
        return null;
    }

    // console.log(Object.keys(responseObj).length)
    // if(Object.keys(responseObj).length == 6){
    //     console.log(responseObj.data);
    //     const strData = JSON.stringify(responseObj.data)
    //     console.log(strData)
    //     console.log(typeof responseObj.data)
    //     console.log(typeof responseObj)
    //     const parsedData = JSON.parse(strData)
    //     console.log(typeof parsedData.test)
    //     // console.log(parsedData.main.description) 
    // }

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
                        {weather && <Card weather = {weather}/>}
                         {/* <Card weather = {weather}/> */}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;