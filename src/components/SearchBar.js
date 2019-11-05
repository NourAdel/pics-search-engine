import React, { Component } from "react";

class SearchBar extends Component {
  state= {term: ''}  
    
    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>image search</label>
                        <input type='text'
                        value={this.state.term}
                         onChange={event =>this.setState({term: event.target.value})}></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
