import './App.css';
import Card from "./component/Card";
import Comment from "./component/Comment";
import React, { useEffect, useState } from "react"; 

function App() {

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);
    let [responseObj, setResponseObj] = useState({});

    useEffect(() => {
    })

    function getForecast() {      
        
        fetch('https://community-open-weather-map.p.rapidapi.com/weather?q=seattle', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
                'X-RapidAPI-Key': '74bf99fc21msh2b4ff766e24ca83p1c722cjsn261aedcec40b',
                'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => setResponseObj(response))
            .then(response => console.log(response))
            .catch(err => console.error(err)); 
    }

    return (
        <div className='container'>
            <div className='header'>
                Weather App
            </div>
            <div className='body'> 

                <div className='searchArea'>
                    {/* <form> */}
                        <input type="text" id='searchBar' placeholder="Enter City Name..." name="search"/>
                        <button id='searchBtn' type="submit" onClick={()=>getForecast()}>Submit</button>
                    {/* </form> */}
                </div>

                <div className='cardArea'>
                    
                    <Card responseObj = {responseObj}/>
                    {/* {JSON.stringify(responseObj)} */}
                </div>

                {/* <div className='commentArea'>
                    <Comment/>
                </div> */}

            </div>

        </div>
    );
}

export default App;
