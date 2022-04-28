// import './App.css';
// import Card from "./component/Card";
// import Comment from "./component/Comment";
// import React, { useEffect, useState } from "react"; 
// import axios from 'axios';

// function App() {

//     let [responseObj, setResponseObj] = useState();
//     let [error, setError] = useState(false);
//     let [loading, setLoading] = useState(false);
//     let textInput = React.createRef();

//     function getForecast(e) {      
//         console.log("clicked")
    
//         const options = {
//             method: 'GET',
//             url: 'https://community-open-weather-map.p.rapidapi.com/weather',
//             params: {
//                 q: textInput.current.value,
//                 lat: '0',
//                 lon: '0',
//                 callback: 'test',
//                 id: '2172797',
//                 lang: 'null',
//                 units: 'imperial',
//                 mode: 'xml'
//             },
//             headers: {
//                 'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
//                 'X-RapidAPI-Key': '74bf99fc21msh2b4ff766e24ca83p1c722cjsn261aedcec40b'
//             }
//         };
//         axios.request(options)
//             .then((response) => {
//                 setResponseObj(response)
//                 const data = response.data;
//                 console.log("data") 
//                 console.log(data)
//                 console.log(typeof data)

//                 console.log(response.data);
//                 console.log(typeof response);
//                 console.log(response);

//             }).catch(function (error) {
//                 console.error(error);
//             });

//     }

//     return (
//         <div className='container'>
//             <div className='header'>
//                 Weather App
//             </div>
//             <div className='body'> 

//                 <div className='searchArea'>
//                     {/* <form> */}
//                         <input type="text" id='searchBar' ref={textInput} placeholder="Enter City Name..." name="search" required/>
//                         <button id='searchBtn' type="submit" onClick={()=>getForecast()}>Submit</button>
//                     {/* </form> */}
//                 </div>

//                 <div>
//                 {JSON.stringify(responseObj)}
//                 {responseObj.data.weather[0].description}
//                 {/* {JSON.stringify(responseObj)} */}
//                 <hr/>
//                 {/* {responseObj} */}
//                     {/* {responseObj.sunrise} */}
//                 </div>

//                 {/* <div className='cardArea'>

//                     <Card responseObj = {responseObj}/>
//                 </div> */}

//                 {/* <div className='commentArea'>   
//                     <Comment/>
//                 </div> */}

//             </div>

//         </div>
//     );
// }

// export default App;


import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function App() {

    const [weather, setWeather] = useState('');
    const [city, setCity] = useState('');
    const apiKey = "3eeff1f838181bd9fe07fa40d3bb4a61";

    const apiCall = async (e) => {
        e.preventDefault()
        const loc = e.target.elements.loc.value
        // const req = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`);
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`);
        setWeather({
            descp: res.data.weather[0].description,
            temp: res.data.main.temp,
            city: res.data.name,
            humidity: res.data.main.humidity,
            press: res.data.main.pressure,
        })

        setCity(res.data.name)

    }

    let k = weather.temp;
    let C = k - 273.15

    const Weath = () => {
        return <div>
            <div className="winfo">
                Weather information for {city}
                <hr></hr>
            </div>
            <div className="Weath">
                <div className="welement">
                    Weather : {weather.descp}
                </div>
                <div className="welement">
                    Temperature : {C.toFixed(2)} &#8451;
                </div>
                <div className="welement">
                    Humidity :{weather.humidity} %
                </div>
                <div className="welement">
                    Pressure :  {weather.press} mb
                </div>
            </div>
        </div>
    }
    return (<>
        <div className="weathhead">Weather Info</div>
        <div className="mainweather">
            <div className="weather">
                <form onSubmit={apiCall} className="form">
                    <input type="text" 
                        placeholder="city" 
                        name="loc" />
                    <button className="bttn">Search</button>
                </form>

                {weather && <Weath />}
            </div>
        </div>
    </>
    )
}

export default App