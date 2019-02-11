import React, { Component } from 'react';
import './App.css';
import Counter from './Counter'

class App extends Component {
  render(props) {
    return (
      <div className="App">
        <Counter count={this.props.count}/>
      </div>
    );
  }
}

export default App;
