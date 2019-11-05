import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  async onSearchSubmit(term) {
    console.log(term);
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 9232eb4f238f09c5555e7ea8f4faf835c442e1eefd33e3e5fb6f622593b3422e"
      }
    });
    // same as 'async'
    //.then((response)=> {
    console.log(response.data.results);
  }


  render() {
    return (
      <div className="ui container ">
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
