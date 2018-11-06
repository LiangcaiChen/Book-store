import React, {Component} from 'react';
import {connect} from 'react-redux';
import uuid4 from 'uuid4';
import {Sparklines, SparklinesLine} from 'react-sparklines';

class WeatherList extends Component {
    renderWeather = (cityData) => {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather=>weather.main.temp);

        return (
            <tr key={uuid4()}>
                <td>{name}</td>
                <Sparklines height={120} width={180} data={temps}>
                    <SparklinesLine color="red"/>
                </Sparklines>
            </tr>
        );
    };

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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