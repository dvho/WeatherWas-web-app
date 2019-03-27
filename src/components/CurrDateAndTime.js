import React from 'react';
import DisplayDate from './DisplayDate';

function CurrDateAndTime(props) {

    let year = props.state.year;
    let month = props.state.month;
    let dayOfMonth = props.state.dayOfMonth;
    let hours = props.state.hours;
    let minutes = ((props.state.minutes)/100).toFixed(2).toString().substring(2,4); //Account for minutes 0-9;
    let amPM = '';

    if (hours >= 13) {
        hours -= 12;
        amPM = 'pm';
    } else {
        amPM = 'am';
    }
    if (hours === 0) {
        hours = 12;
        amPM = 'am';
    }

    return(
        <div>
            <DisplayDate month={month} day={dayOfMonth} year={year}/>
            <p className='time'>{hours}:{minutes}{amPM}</p>
        </div>
    )
}

export default CurrDateAndTime;
