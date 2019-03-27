import React from 'react';

function DisplayDate(props) {

    let day = props.day;
    let month = props.month;
    let year = props.year;

    let dayOfWeek = (new Date(`${month} ${day} ${year}`));
    dayOfWeek = dayOfWeek.toString().substring(0,3);

    if (dayOfWeek === 'Mon') {
        dayOfWeek = 'Monday'
    }
    if (dayOfWeek === 'Tue') {
        dayOfWeek = 'Tuesday'
    }
    if (dayOfWeek === 'Wed') {
        dayOfWeek = 'Wednesday'
    }
    if (dayOfWeek === 'Thu') {
        dayOfWeek = 'Thursday'
    }
    if (dayOfWeek === 'Fri') {
        dayOfWeek = 'Friday'
    }
    if (dayOfWeek === 'Sat') {
        dayOfWeek = 'Saturday'
    }
    if (dayOfWeek === 'Sun') {
        dayOfWeek = 'Sunday'
    }

    if (props.month === 'Jan') {
        month = 'January'
    }
    if (props.month === 'Feb') {
        month = 'February'
    }
    if (props.month === 'Mar') {
        month = 'March'
    }
    if (props.month === 'Apr') {
        month = 'April'
    }
    if (props.month === 'May') {
        month = 'May'
    }
    if (props.month === 'Jun') {
        month = 'June'
    }
    if (props.month === 'Jul') {
        month = 'July'
    }
    if (props.month === 'Aug') {
        month = 'August'
    }
    if (props.month === 'Sep') {
        month = 'September'
    }
    if (props.month === 'Oct') {
        month = 'October'
    }
    if (props.month === 'Nov') {
        month = 'November'
    }
    if (props.month === 'Dec') {
        month = 'December'
    }

    if (day === 1 || day === 21 || day === 31) {
        day = `${day}st`
    }
    if (day === 2 || day === 22) {
        day = `${day}nd`
    }
    if (day === 3 || day === 23) {
        day = `${day}rd`
    }
    if (day === 4 || day === 5 || day === 6 || day === 7 || day === 8 || day === 9 || day === 10 || day === 11 || day === 12 || day === 13 || day === 14 || day === 15 || day === 16 || day === 17 || day === 18 || day === 19 || day === 20 || day === 24 || day === 25 || day === 26 || day === 27 || day === 28 || day === 29 || day === 30) {
        day = `${day}th`
    }

    return(
        <h1>{dayOfWeek}, {month} {day} {year}</h1>
    )

}

export default DisplayDate;
