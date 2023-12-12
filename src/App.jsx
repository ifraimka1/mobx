import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Board from "./components/Board";
import './App.css';

@inject("BoardStore")
@observer
class App extends Component {

  render() {

    return (
      <div className="App">
        <div>
          <h1>Крестики-нолики</h1>
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
