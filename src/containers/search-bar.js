import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            term: ''
        };

        // the callback in the render() method means that "this" is bound to the incorrect context. This line here fixes that. we are here binding the "this" keyword to THIS COMPONENT'S CONTEXT
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState({
            term: event.target.value
        });
    }

    onFormSubmit(event){
        event.preventDefault();
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
