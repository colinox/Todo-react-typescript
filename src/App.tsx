import * as React from 'react';
import './App.css';

import logo from './logo.svg';

interface IState {
  color: "red" | "blueviolet"
}

class App extends React.Component<{}, IState> {
  constructor(props: {}){
    super(props);
    this.state = {
      color: "red"
    }
  }
  public render() {
    const { color } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {color}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
