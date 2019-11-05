import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>image search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={event => this.setState({ term: event.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
// uncontrolled: values stored in the HTML documents, pulled by DOM
// controlled: values stored in the react side
