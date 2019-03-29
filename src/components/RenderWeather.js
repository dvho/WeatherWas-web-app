// Look up cities based on woeid by replacing id at the end of this URL https://www.flickr.com/places/info/2364558
// Better historical weather data API is https://openweathermap.org and free API key is at https://gist.github.com/SebastianM/d4de7c3427883896b4b8

import React from 'react';
import PrevDateAndTime from './PrevDateAndTime';
import CurrDateAndTime from './CurrDateAndTime';
import WeatherBlock from './WeatherBlock';

class RenderWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currData: null,
            prevData: null,
            year: 0,
            month: '',
            numericMonth: 0,
            dayOfMonth: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            dayOfWeek: '',
            gmtDifferential: '',
            woeid: 'null'
        }
        this.calcTimeAndDifferential = this.calcTimeAndDifferential.bind(this);
        this.fetchCurrData = this.fetchCurrData.bind(this);
        this.fetchPrevData = this.fetchPrevData.bind(this);
    }

    calcTimeAndDifferential() {
        let currentTime = Date();
        let year = parseInt(currentTime.substring(11,15));
        let month = currentTime.substring(4,7);
        let numericMonth = new Date().getMonth() + 1;
        let dayOfMonth = parseInt(currentTime.substring(8,10));
        let hours = parseInt(currentTime.substring(16,18));
        let minutes = parseInt(currentTime.substring(19,21));
        let seconds = parseInt(currentTime.substring(22,24));
        let dayOfWeek = currentTime.substring(0,3);
        let gmtDifferential = parseInt(currentTime.slice(currentTime.indexOf('GMT')+3).split(' ')[0].substring(0,3));

        this.setState({
            year: year,
            month: month,
            numericMonth: numericMonth,
            dayOfMonth: dayOfMonth,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            dayOfWeek: dayOfWeek,
            gmtDifferential: gmtDifferential
        })
    }

    fetchCurrData(props) {
        console.log(this.state.woeid);
        fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${this.state.woeid}/`)
        .then(response => response.json())
        .then(currData => this.setState({
            currData: currData
        }));
    }

    fetchPrevData(props) {
        console.log(this.state.woeid);
        fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${this.state.woeid}/${this.state.year}/${this.state.numericMonth}/${this.state.dayOfMonth}/`)
        .then(response => response.json())
        .then(prevData => this.setState({
            prevData: prevData
        }));
    }

    async componentDidMount() {
        setInterval(() => {
            if ((this.state.woeid !== null) && (this.props.woeid !== null) && (this.state.woeid !== this.props.woeid)) {
                this.setState({
                    woeid: this.props.woeid
                })
                this.calcTimeAndDifferential();
                this.fetchPrevData();
                this.fetchCurrData();
            }
        }, 10)
    }

    render() {
        //console.log(this.props.woeid)
        //console.log(CityData);
        //console.log(this.state.currData !== null ? this.state.currData.consolidated_weather : '');
        //console.log(this.state.prevData !== null ? this.state.prevData : '');

        const previousWeather = [];
        let currentWeather = [];

        if (this.state.prevData !== null) {
            this.state.prevData.forEach(i => {
                previousWeather.push(<div key={i.id}><PrevDateAndTime dayOfMonth={this.state.dayOfMonth} prevData={i} gmtDifferential={this.state.gmtDifferential}/><WeatherBlock prevData={i}/></div>)
            });
        }

        if (this.state.currData !== null) {
            currentWeather = this.state.currData.consolidated_weather[0];
        }

        return (
            <div>
                <CurrDateAndTime state={this.state}/>
                <WeatherBlock prevData={currentWeather}/>
                {previousWeather}
            </div>
        );
    }
}

export default RenderWeather;
