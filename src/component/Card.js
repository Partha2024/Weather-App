import React from 'react'
import './Card.css';

export default function Card(props) {

    return (
        <div className='card'>
                
            <div className='cardItem'>

                <div className="cardHeader">
                    {props.weather.city}, {props.weather.country}, Fri Apr 28 2022
                </div>

                <div className='sides'>

                    <div className='leftDiv'>
                        {(props.weather.temp).toFixed(1)}&deg;C 

                    </div>

                    <div className="rightDiv">
                        <div className="welement">
                            Weather : <b> {props.weather.descp}</b>
                        </div>
                        <div className="welement">
                            
                            Wind : <b>{props.weather.wind} km/hr</b>
                        </div><br/>

                        <div className="welement">
                            Humidity : <b>{props.weather.humidity} %</b>
                        </div>
                        <div className="welement">
                            Pressure : <b> {props.weather.press} Pa</b>
                        </div><br/>
                        
                        <div className="welement">
                            Max Temp :<b> {(props.weather.maxTemp).toFixed(2)} &deg;C</b>
                        </div>
                        <div className="welement">
                            Min Temp :<b> {(props.weather.minTemp).toFixed(2)} &deg;C</b>
                        </div><br/>

                        <div className="welement">
                            Sunrise : <b>{props.weather.sunrise}</b>
                        </div>
                        <div className="welement">
                            Sunset :<b> {props.weather.sunset}</b>
                        </div><br/>
                    </div>

                </div>


            </div>

        </div> 
    )
}
