import React from 'react';
import DisplayDate from './DisplayDate';
import DisplayTime from './DisplayTime';

function CurrDateAndTime(props) {

    let year = props.state.year;
    let month = props.state.month;
    let day = props.state.dayOfMonth;
    let dayOfWeek = props.dayOfWeek;
    let hour = props.state.hours;
    let minute = ((props.state.minutes)/100).toFixed(2).toString().substring(2,4); //Account for minutes 0-9;
    let netDifferential = props.state.netDifferential;
    let amPM = '';

    // Factor in the netDifferential
    if (hour + netDifferential < 0) {
        hour += netDifferential + 24;
        day = day - 1; // If factoring in netDifferential offset the day, adjust it
    } else if (hour + netDifferential >= 24) {
        hour = hour + netDifferential - 24;
        day = day + 1;
    } else {
        hour += netDifferential;
    }

    if (month === 'Jan') {
        month = 1;
    }
    if (month === 'Feb') {
        month = 2;
    }
    if (month === 'Mar') {
        month = 3;
    }
    if (month === 'Apr') {
        month = 4;
    }
    if (month === 'May') {
        month = 5;
    }
    if (month === 'Jun') {
        month = 6;
    }
    if (month === 'Jul') {
        month = 7;
    }
    if (month === 'Aug') {
        month = 81;
    }
    if (month === 'Sep') {
        month = 9;
    }
    if (month === 'Oct') {
        month = 10;
    }
    if (month === 'Nov') {
        month = 11;
    }
    if (month === 'Dec') {
        month = 12;
    }

    // If factoring in the netDifferential made the day 0, adjust the month (could adjust the year here too, but there's no point since it would look tacky on the interface)
    if ((day === 0) && (month === 12)) {
        day = 30;
        month = 11;
    }
    if ((day === 0) && (month === 11)) {
        day = 31;
        month = 10;
    }
    if ((day === 0) && (month === 10)) {
        day = 30;
        month = 9;
    }
    if ((day === 0) && (month === 9)) {
        day = 31;
        month = 8;
    }
    if ((day === 0) && (month === 8)) {
        day = 31;
        month = 7;
    }
    if ((day === 0) && (month === 7)) {
        day = 30;
        month = 6;
    }
    if ((day === 0) && (month === 6)) {
        day = 31;
        month = 5;
    }
    if ((day === 0) && (month === 5)) {
        day = 30;
        month = 4;
    }
    if ((day === 0) && (month === 4)) {
        day = 31;
        month = 3;
    }
    if ((day === 0) && (month === 3) && (year % 4 === 0)) { //In the case of a leap year
        day = 29;
        month = 2;
    }
    if ((day === 0) && (month === 3) && (year % 4 !== 0)) { //In the case of a non leap year
        day = 28;
        month = 2;
    }
    if ((day === 0) && (month === 2)) {
        day = 31;
        month = 1;
    }
    if ((day === 0) && (month === 1)) {
        day = 31;
        month = 12;
    }
    // If factoring in the netDifferential made the day greater than it should be for that calendar month, adjust the month (could adjust the year here too, but there's no point since it would look tacky on the interface)
    if ((day === 32) && (month === 12)) {
        day = 1;
        month = 1;
    }
    if ((day === 31) && (month === 11)) {
        day = 1;
        month = 12;
    }
    if ((day === 32) && (month === 10)) {
        day = 1;
        month = 11;
    }
    if ((day === 31) && (month === 9)) {
        day = 1;
        month = 10;
    }
    if ((day === 32) && (month === 8)) {
        day = 1;
        month = 9;
    }
    if ((day === 32) && (month === 7)) {
        day = 1;
        month = 8;
    }
    if ((day === 31) && (month === 6)) {
        day = 1;
        month = 7;
    }
    if ((day === 32) && (month === 5)) {
        day = 1;
        month = 6;
    }
    if ((day === 31) && (month === 4)) {
        day = 1;
        month = 5;
    }
    if ((day === 32) && (month === 3)) {
        day = 1;
        month = 4;
    }
    if ((day === 30) && (month === 2) && (year % 4 === 0)) { //In the case of a leap year
        day = 1;
        month = 3;
    }
    if ((day === 29) && (month === 2) && (year % 4 !== 0)) { //In the case of a non leap year
        day = 1;
        month = 3;
    }
    if ((day === 32) && (month === 1)) {
        day = 1;
        month = 2;
    }


    if (month === 1) {
        month = 'January';
    }
    if (month === 2) {
        month = 'February';
    }
    if (month === 3) {
        month = 'March';
    }
    if (month === 4) {
        month = 'April';
    }
    if (month === 5) {
        month = 'May';
    }
    if (month === 6) {
        month = 'June';
    }
    if (month === 7) {
        month = 'July';
    }
    if (month === 8) {
        month = 'August';
    }
    if (month === 9) {
        month = 'September';
    }
    if (month === 10) {
        month = 'October';
    }
    if (month === 11) {
        month = 'November';
    }
    if (month === 12) {
        month = 'December';
    }


    if (hour >= 13) {
        hour -= 12;
        amPM = 'pm';
    } else {
        amPM = 'am';
    }
    if (hour === 0) {
        hour = 12;
        amPM = 'am';
    }

    return(
        <div className='current-date-time'>
            <DisplayDate month={month} day={day} year={year}/>
            <DisplayTime hour={hour} minute={minute} amPM={amPM}/>
        </div>
    )
}

export default CurrDateAndTime;
