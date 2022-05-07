import React from 'react'
import './Card.css';

export default function Card(props) {

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; 
    var date = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var day = dateObj.getDay();   {/*used date function to get date, month and day */}

    var dayStr;{/*converting day into string format */}
    if(day == 1){
        dayStr = "Mon"
    }else if(day == 2){
        dayStr = "Tue"
    }else if(day == 3){
        dayStr = "Wed"
    }else if(day == 4){
        dayStr = "Thu"
    }else if(day == 5){
        dayStr = "Fri"
    }else if(day == 6){
        dayStr = "Sat"
    }else if(day == 0){
        dayStr = "Sun"
    }

    var monthStr;{/*converting month into string format */}
    if(month == 1){
        monthStr = "Jan"
    }else if(month == 2){
        monthStr = "Fab"
    }else if(month == 3){
        monthStr = "Mar"
    }else if(month == 4){
        monthStr = "Apr"
    }else if(month == 5){
        monthStr = "May"
    }else if(month == 6){
        monthStr = "Jun"
    }else if(month == 7){
        monthStr = "Jul"
    }else if(month == 8){
        monthStr = "Aug"
    }else if(month == 9){
        monthStr = "Sep"
    }else if(month == 10){
        monthStr = "Oct"
    }else if(month == 11){
        monthStr = "Nav"
    }else if(month == 12){
        monthStr = "Dec"
    }

    return (
        <div className='card'>
                
            <div className='cardItem'>

                <div className="cardHeader">
                    {props.weather.city}, {props.weather.country}, {dayStr} {monthStr} {date} {year}
                </div>

                <div className='sides'>

                    <div className='leftDiv'>
                        {(props.weather.temp).toFixed(1)}&deg;C 
                        <img className='image' src={`http://openweathermap.org/img/wn/${props.weather.icon}.png`} alt="" />

                    </div>

                    <div className="rightDiv">
                        <div>
                            Weather: <b> {props.weather.descp}</b>
                        </div>
                        <div>
                            
                            Wind: <b>{props.weather.wind} km/hr</b>
                        </div><br/>

                        <div>
                            Humidity: <b>{props.weather.humidity}%</b>
                        </div>
                        <div>
                            Pressure: <b> {props.weather.press} Pa</b>
                        </div><br/>
                        
                        <div>
                            Max Temp:<b> {(props.weather.maxTemp).toFixed(0)}&deg;C</b>
                        </div>
                        <div>
                            Min Temp:<b> {(props.weather.minTemp).toFixed(0)}&deg;C</b>
                        </div><br/>

                        <div>
                            Sunrise: <b>{props.weather.sunrise}</b>
                        </div>
                        <div>
                            Sunset:<b> {props.weather.sunset}</b>
                        </div><br/>
                    </div>

                </div>


            </div>

        </div> 
    )
}
