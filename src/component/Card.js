import React from 'react'
import App from '../App'

export default function Card(props) {

    // console.log(props)
    // var data = JSON.stringify(props.responseObj);
    // console.log(data.pressure)
    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <div>
                {props.responseObj}
                {/* <p>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p> */}
            </div>
            
        </div> 
    )
}
