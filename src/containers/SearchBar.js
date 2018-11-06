import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchWeather} from '../actions/WeatherAction';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state={
            term: ''
        };
    }

    onInputChange = (e) => {
        this.setState({term: e.target.value});
    };

    onFormSubmit = (e) => {
        e.preventDefault();

      // Fetch weather data
        this.props.dispatch(fetchWeather(this.state.term));
        this.setState({term:''});

    };

    render() {
        return (
            <div>
                <form className="input-group" onSubmit={this.onFormSubmit}>
                    <input
                        placeholder="Get a five-day forecast in your favourite cities"
                        className="form-control"
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Search</button>
                    </span>
                </form>

            </div>
        )
    }
}

export default connect()(SearchBar);