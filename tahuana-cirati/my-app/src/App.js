import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ""
    }
  }

  updateSearch = (event) => {
    this.setState({search: event.target.value });
  }

  render() {
    

    return (<div className="App">
      <Header data="Gotta Fetch em all!" />
      
    </div>);
  }
}

export default App;
 