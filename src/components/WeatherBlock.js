import React from 'react';

function Weatherblock(props) {

    let theTempF;
    let theTempC;
    let generalCondition;

    if (props.prevData.the_temp) {
        theTempF = Math.round((props.prevData.the_temp * (9/5)) + 32);
        theTempC = Math.round(props.prevData.the_temp)
    }

    if ((props.prevData.weather_state_name) && (props.prevData.weather_state_name === 'Heavy Cloud')) {
        generalCondition = 'Cloudy';
    } else if ((props.prevData.weather_state_name) && (props.prevData.weather_state_name === 'Light Cloud')) {
        generalCondition = 'Partly Cloudy';
    } else {
        generalCondition = props.prevData.weather_state_name;
    }

    //<span className='weather-icon' style={{display: props.prevData.weather_state_abbr ? 'block' : 'none'}}><img alt='' src={`https://www.metaweather.com/static/img/weather/${props.prevData.weather_state_abbr}.svg`}/></span>

    return(
        <div>
            <div style={{display: props.prevData.the_temp ? 'block' : 'none'}}>{theTempF} ºF / {theTempC} ºC</div>
            <div style={{display: props.prevData.weather_state_name ? 'block' : 'none'}}>{generalCondition}</div>
            <div style={{visibility: props.prevData.humidity ? 'visible' : 'hidden'}}>Humidity: {props.prevData.humidity}%</div>
            <div className="wind-data"><div style={{display: props.prevData.wind_direction_compass ? 'block' : 'none'}}>Wind Direction: {props.prevData.wind_direction_compass}</div>
            <div style={{display: props.prevData.wind_speed ? 'block' : 'none'}}>Wind Speed: {Math.round(props.prevData.wind_speed)}mph</div></div>
        </div>
    )
}

export default Weatherblock;
