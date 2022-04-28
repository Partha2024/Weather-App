import './App.css';
import Card from "./component/Card";
import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function App() {

    const [weather, setWeather] = useState('');
    const [city, setCity] = useState('');
    // const APIKEY = "3eeff1f838181bd9fe07fa40d3bb4a61";

    const apiCall = async (e) => {
        e.preventDefault()
        const location = e.target.elements.location.value;
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3eeff1f838181bd9fe07fa40d3bb4a61`);
        console.log(res)
        setWeather({
            descp: res.data.weather[0].description,
            temp: res.data.main.temp,
            maxTemp: res.data.main.temp_max,
            minTemp: res.data.main.temp_min,
            city: res.data.name,
            humidity: res.data.main.humidity,
            press: res.data.main.pressure,
            country : res.data.sys.country,
            wind: res.data.wind.speed,
            sunrise: res.data.sys.sunrise,
            sunset: res.data.sys.sunset,
        })
        setCity(res.data.name)
    }

    return (
    <div className='container'>

        <div className='header'>
            Weather App
        </div>

        <div className='body'> 

            <div className='searchArea'>
                <form onSubmit={apiCall} className="form">
                    <input type="text" id='searchBar' placeholder="Enter City Name..." name="location" required/>
                    <button className="bttn" id='searchBtn'>Search</button>
                </form>
            </div>

            <div className='cardArea'>
                {/* {weather && <Card weather = {weather}/>} */}
                <Card weather = {weather}/>
            </div>

            {/* <div className='commentArea'>   
                <Comment/>
            </div> */}

        </div>

    </div>
    
)
}





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
        // <div className='container'>
        //     <div className='header'>
        //         Weather App
        //     </div>
        //     <div className='body'> 

        //         <div className='searchArea'>
        //             {/* <form> */}
        //                 <input type="text" id='searchBar' ref={textInput} placeholder="Enter City Name..." name="search" required/>
        //                 <button id='searchBtn' type="submit" onClick={()=>getForecast()}>Submit</button>
        //             {/* </form> */}
        //         </div>

        //         <div>
        //         {JSON.stringify(responseObj)}
        //         {responseObj.data.weather[0].description}
        //         {/* {JSON.stringify(responseObj)} */}
        //         <hr/>
        //         {/* {responseObj} */}
        //             {/* {responseObj.sunrise} */}
        //         </div>

        //         {/* <div className='cardArea'>

        //             <Card responseObj = {responseObj}/>
        //         </div> */}

        //         {/* <div className='commentArea'>   
        //             <Comment/>
        //         </div> */}

        //     </div>

        // </div>
//     );
// }

// export default App;