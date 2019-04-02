import React from 'react';

function DisplayTime(props) {
    return(
        <span className='time'>{props.hour}:{props.minute}{props.amPM}</span>
    )
}

export default DisplayTime;
