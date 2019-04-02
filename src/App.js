import React from 'react';
import CityData from './CityData';
import Options from './components/Options';
import GetWeatherData from './components/GetWeatherData';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            countrySelection: null,
            stateSelection: null,
            citySelection: null,
            woeid: null,
            cityGmtDifferential: 0
        }
        this.countryInput = this.countryInput.bind(this);
        this.stateInput = this.stateInput.bind(this);
        this.cityInput = this.cityInput.bind(this);
        this.woeidInput = this.woeidInput.bind(this);
    }

    countryInput(e) {
        if (this.countrySelection !== 'United States') {
            this.setState({
                countrySelection: e.target.value,
                stateSelection: null,
                citySelection: null,
                woeid: null,
                googleMap: null
            })
        }

    }
    stateInput(e) {
        this.setState({
            stateSelection: e.target.value,
            citySelection: null,
            woeid: null
        })
    }
    cityInput(e) {
        this.setState({
            citySelection: e.target.value,
            woeid: null
        })
    }
    woeidInput(e) {
        if (this.state.citySelection !== 'City' && this.state.citySelection !== null && this.state.citySelection !== 'Birmingham' && this.state.citySelection !== 'Portland' && this.state.citySelection !== 'Manchester') {
            CityData.forEach(i => {
                if (i.city === this.state.citySelection) {
                    this.setState({
                        woeid: i.woeid,
                        cityGmtDifferential: i.cityGmtDifferential,
                        googleMap: i.googleMap
                    })
                }
            })
        } else if (this.state.citySelection === 'Birmingham' && this.state.countrySelection === 'United Kingdom') {
            this.setState({
                woeid: '12723',
                cityGmtDifferential: 0
            })
        } else if (this.state.citySelection === 'Birmingham' && this.state.countrySelection === 'United States') {
            this.setState({
                woeid: '2364559',
                cityGmtDifferential: -5
            })
        } else if (this.state.citySelection === 'Manchester' && this.state.countrySelection === 'United Kingdom') {
            this.setState({
                woeid: '28218',
                cityGmtDifferential: 0
            })
        } else if (this.state.citySelection === 'Manchester' && this.state.countrySelection === 'United States') {
            this.setState({
                woeid: '2444674',
                cityGmtDifferential: -4
            })
        } else if (this.state.citySelection === 'Portland' && this.state.stateSelection === 'Maine') {
            this.setState({
                woeid: '2475688',
                cityGmtDifferential: -4
            })
        } else if (this.state.citySelection === 'Portland' && this.state.stateSelection === 'Oregon') {
            this.setState({
                woeid: '2475687',
                cityGmtDifferential: -7
            })
        }
    }

    render() {
            //Build an array of countries out of the CityData
            const countries = [];
            CityData.forEach(i => {
                if (countries.includes(i.country) === false) {
                    countries.push(i.country)
                }
            })
            //Alphabetize them, iterate over them and make the array of strings an array of option elements using Options
            countries.sort().forEach(i => {
                countries.push(<Options key={i} option={i}/>)
                });
            //If the country selected is 'United States', build an array of states out of the CityData
            const states = [];
            CityData.forEach(i => {
                if (this.state.countrySelection === 'United States') {
                    if (states.includes(i.state) === false && i.state !== undefined) {
                        states.push(i.state)
                    }
                }
            })
            //Alphabetize them, iterate over them and make the array of strings an array of option elements using Options
            states.sort().forEach(i => {
                states.push(<Options key={i} option={i}/>)
                });
            //Build an array of cities out of the CityData
            const cities = [];
            if (this.state.countrySelection === 'United States') { //If country selected is 'United States' iterate through CityData pushing cities of the state that match stateSelection else, if country is not 'United States' and is also not null, iterate through CityData pushing cities of the country that match country selection.
                CityData.forEach(i => {
                    if (i.state === this.state.stateSelection) {
                        cities.push(i.city);
                    }
                })
                //Alphabetize them, iterate over them and make the array of strings an array of option elements using Options
                cities.sort().forEach(i => {
                    cities.push(<Options key={i} option={i}/>)
                })

            } else if (this.state.countrySelection !== null) {
                CityData.forEach(i => {
                    if (i.country === this.state.countrySelection) {
                        cities.push(i.city);
                    }
                })
                //Alphabetize them, iterate over them and make the array of strings an array of option elements using Options
                cities.sort().forEach(i => {
                    cities.push(<Options key={i} option={i}/>)
                })
            }
            //Return all the drop down menus by placing the arrays of the option component and conditionally render the states array if the countrySelection is 'United States'
        return(
            <div>
                <div className='input-container' style={{display: this.state.cityGmtDifferential === 0 ? 'block' : 'none'}}>
                    <select className='country-drop-down' onChange={this.countryInput}>
                        <option>Country</option>{countries}
                    </select>
                    <select style={{display: this.state.countrySelection === 'United States' ? 'inline' : 'none'}} className='state-drop-down' onChange={this.stateInput}>
                        <option>State</option>{states}
                    </select>
                    <select className='city-drop-down' onChange={this.cityInput}>
                        <option>City</option>{cities}
                    </select>
                    <button className='submit' onClick={this.woeidInput}>Submit!</button>
                </div>
                <GetWeatherData woeid={this.state.woeid} cityGmtDifferential={this.state.cityGmtDifferential} googleMap={this.state.googleMap}/>
            </div>
        )
    }
}

export default App;
