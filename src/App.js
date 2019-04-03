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
            cityGmtDifferential: 0,
            googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65369129.86842964!2d-53.67335007454488!3d25.97137352763425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc22482523302153%3A0xb7a6f81873dfd75a!2sWestern+Sahara!5e0!3m2!1sen!2sus!4v1554230084495!5m2!1sen!2sus"
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
                woeid: null
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
        });
        setTimeout(this.woeidInput, 0)
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
                cityGmtDifferential: 0,
                googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4973637.488008223!2d-6.3481355607757735!3d52.505675763641094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870942d1b417173%3A0xca81fef0aeee7998!2sBirmingham%2C+UK!5e0!3m2!1sen!2sus!4v1554207276895!5m2!1sen!2sus"
            })
        } else if (this.state.citySelection === 'Birmingham' && this.state.countrySelection === 'United States') {
            this.setState({
                woeid: '2364559',
                cityGmtDifferential: -5,
                googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6809261.416296754!2d-91.33482642291096!3d33.55767150280028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888911df5885bfd3%3A0x25507409eaba54ce!2sBirmingham%2C+AL!5e0!3m2!1sen!2sus!4v1554180841624!5m2!1sen!2sus"
            })
        } else if (this.state.citySelection === 'Manchester' && this.state.countrySelection === 'United Kingdom') {
            this.setState({
                woeid: '28218',
                cityGmtDifferential: 0,
                googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4860348.19422484!2d-6.70785562409263!3d53.50032084974938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester%2C+UK!5e0!3m2!1sen!2sus!4v1554207245320!5m2!1sen!2sus"
            })
        } else if (this.state.citySelection === 'Manchester' && this.state.countrySelection === 'United States') {
            this.setState({
                woeid: '2444674',
                cityGmtDifferential: -4,
                googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5976012.811380833!2d-75.92892472783633!3d42.99986085454899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e24ed668666ca3%3A0x6b0432461f357179!2sManchester%2C+NH!5e0!3m2!1sen!2sus!4v1554182089213!5m2!1sen!2sus"
            })
        } else if (this.state.citySelection === 'Portland' && this.state.stateSelection === 'Maine') {
            this.setState({
                woeid: '2475688',
                cityGmtDifferential: -4,
                googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5907837.389055136!2d-74.69599720702428!3d43.69628626628062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb29c72aab0ee2d%3A0x7e9db6b53372fa29!2sPortland%2C+ME!5e0!3m2!1sen!2sus!4v1554182034342!5m2!1sen!2sus"
            })
        } else if (this.state.citySelection === 'Portland' && this.state.stateSelection === 'Oregon') {
            this.setState({
                woeid: '2475687',
                cityGmtDifferential: -7,
                googleMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5719905.896192765!2d-127.13870834311085!3d45.57199102439826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b0b7da97427%3A0x1c36b9e6f6d18591!2sPortland%2C+OR!5e0!3m2!1sen!2sus!4v1554182730021!5m2!1sen!2sus"
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
                <div className='container current-block' style={{display: this.state.woeid === null ? 'block' : 'none'}}>
                    <div className='veil'></div>
                    <iframe className="map" title="googMap" src={this.state.googleMap}></iframe>
                    <span className='in'>In
                        <select className='drop-down' style={{display: this.state.countrySelection === null ? 'block' : 'none'}} onChange={this.countryInput}>
                            <option>Country</option>{countries}
                        </select>
                        <select className='drop-down' style={{display: this.state.countrySelection === 'United States' && this.state.stateSelection === null ? 'block' : 'none'}} onChange={this.stateInput}>
                            <option>State</option>{states}
                        </select>
                        <select className='drop-down' style={{display: ((this.state.countrySelection !== null) && (this.state.countrySelection !== 'United States')) || (this.state.countrySelection === 'United States' && this.state.stateSelection !== null) ? 'block' : 'none'}} onChange={this.cityInput}>
                            <option>City</option>{cities}
                        </select>
                        the weather was...
                    </span>
                </div>
                <GetWeatherData woeid={this.state.woeid} cityGmtDifferential={this.state.cityGmtDifferential} googleMap={this.state.googleMap} citySelection={this.state.citySelection}/>
            </div>
        )
    }
}

export default App;
