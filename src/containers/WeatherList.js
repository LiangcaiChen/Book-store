import React, {Component} from 'react';
import {connect} from 'react-redux';
import uuid4 from 'uuid4';
import Chat from '../components/Chat';
import GoogleMap from '../components/GoogleMap';


class WeatherList extends Component {
    renderWeather = (cityData) => {
        // const name = cityData.city.name;
        const temps = cityData.list.map(weather=>weather.main.temp);
        const pressures = cityData.list.map(weather=>weather.main.pressure);
        const humidities = cityData.list.map(weather=>weather.main.humidity);
        const {lon, lat} = cityData.city.coord;

        return (
            <tr key={uuid4()}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chat data={temps} color="blue" units="K"/></td>
                <td><Chat data={pressures} color="green" units="hPa"/></td>
                <td><Chat data={humidities} color="black" units="%"/></td>
            </tr>
        );
    };



    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (k)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.weathers.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = ({ weathers }) => ({ weathers });

export default connect(mapStateToProps)(WeatherList);