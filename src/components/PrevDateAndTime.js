import React from 'react';
import DisplayDate from './DisplayDate';
import DisplayTime from './DisplayTime'

function PrevDateAndTime(props) {

    let currentDayOfMonth = props.dayOfMonth;
    let timeZoneConvertedDayOfMonth;
    let cityGmtDifferential = props.cityGmtDifferential;
    let year = parseInt((props.prevData.created).substring(0,4));
    let month = parseInt((props.prevData.created).substring(5,7));
    let day = parseInt((props.prevData.created).substring(8,10));
    let hour = parseInt((props.prevData.created).substring(11,13));
    let minute = parseInt((props.prevData.created).substring(14,16));
    let amPM = '';
    let dayInSeconds = 0;
    // Factor in the cityGmtDifferential
    if (hour + cityGmtDifferential < 0) {
        hour += cityGmtDifferential + 24;
        day = day - 1; // If factoring in cityGmtDifferential offset the day, adjust it
        timeZoneConvertedDayOfMonth = currentDayOfMonth - 1;
    } else if (hour + cityGmtDifferential >= 24) {
        hour = hour + cityGmtDifferential - 24;
        day = day + 1;
        timeZoneConvertedDayOfMonth = currentDayOfMonth + 1;
    } else {
        hour += cityGmtDifferential;
    }



    // If factoring in the cityGmtDifferential made the day 0, adjust the month (could adjust the year here too, but there's no point since it would look tacky on the interface)
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
    // If factoring in the cityGmtDifferential made the day greater than it should be for that calendar month, adjust the month (could adjust the year here too, but there's no point since it would look tacky on the interface)
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

    dayInSeconds = (minute * 60) + (hour * 3600);

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

    minute = (minute/100).toFixed(2).toString().substring(2,4); //Account for minutes 0-9;

    return(
        <div className="previous-date-time">
            <div style={{display: timeZoneConvertedDayOfMonth === day || dayInSeconds <= 75480 ? 'none' : 'block'}}><DisplayDate month={month} day={day} year={year}/></div>
            <DisplayTime hour={hour} minute={minute} amPM={amPM}/>
        </div>
    )
}

export default PrevDateAndTime;
