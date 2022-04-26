import React from 'react'
import App from '../App'

export default function Card(props) {

    // console.log(props)
    var data = JSON.stringify(props.responseObj);
    // console.log(data.pressure)
    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <div>
                {data}
            </div>
            
        </div>
    )
}
