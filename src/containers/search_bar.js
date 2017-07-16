import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor (props) {
      super(props);

      this.state = {
        term: ''
      };
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({
      term: event.target.value
    });
  }

  render() {
    return (
      <form className="input-group redux-form-input">
        <input type="text"
               className="form-control"
               id="city"
               placeholder="Add a city"
               value={this.state.term}
               onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">Submit</button>
        </span>
      </form>
    );
  };
}
