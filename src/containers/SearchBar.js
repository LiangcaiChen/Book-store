import React,{Component} from 'react';

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
      this.setState({term: ''});
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

export default SearchBar;