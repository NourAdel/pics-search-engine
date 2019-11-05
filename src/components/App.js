import React from "react";
import unsplash from "../Api/unsplash";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async term => {
    console.log(term);
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    // same as 'async'
    //.then((response)=> {

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container ">
        <SearchBar onSubmit={this.onSearchSubmit} />
        found: {this.state.images.length}
      </div>
    );
  }
}

export default App;
