import React from 'react';

function DisplayTime(props) {
    return(
        <p className='time'>{props.hour}:{props.minute}{props.amPM}</p>
    )
}

export default DisplayTime;
