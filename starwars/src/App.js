import React, { Component } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextUrl: null,
      previousUrl: null
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          starwarsChars: data.results,
          nextUrl: data.next,
          previousUrl: data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  handleNext = event => {
    this.getCharacters(this.state.nextUrl);
  };

  handlePrevious = event => {
    if (this.state.previousUrl !== null) {
      return this.getCharacters(this.state.previousUrl);
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">Star Wars Characters</h1>
        <div className="Buttons">
          <button onClick={this.handlePrevious}>Previous</button>
          <button onClick={this.handleNext}> Next</button>
        </div>
        <div>
          <CharacterList starwarsChars={this.state.starwarsChars} />
        </div>
      </div>
    );
  }
}

export default App;
