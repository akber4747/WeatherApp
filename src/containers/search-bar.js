import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index.js';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            term: ''
        };

        // the callback in the render() method means that "this" is bound to the incorrect context. This line here fixes that. we are here binding the "this" keyword to THIS COMPONENT'S CONTEXT
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({
            term: event.target.value
        });
    }

    onFormSubmit(event){
        event.preventDefault();
        // this is where we need to get the weather... this is in our action creator! so we need to connect to redux
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }
    
    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a five-day forecast for your cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />    
                <span className="input-group-btn">
                    <button className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }

}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);