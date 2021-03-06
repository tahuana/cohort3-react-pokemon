import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header';
import InputSearch from './components/InputSearch';
import Button from './components/Button';
import PokemonDisplay from './components/PokemonDisplay' 
import updateHeaderAction from './actions/header-action';

class App extends Component {
  
  componentDidMount() {
    this.props.updateHeader('Gotta Fetch em all!');
  }

  render() {
    return (
      <div className="App" >
      <Header />
      <div className="App-body">
        <div>
          <InputSearch />
          <Button />
        </div>
        <PokemonDisplay />
      </div>
    </div>
    );
  }
}

const mapStateToProps = store => { 
  return ({
  //header: store.header,
  //inputSearch: store.inputSearch,
  //pokemonList: store.pokemonList
})}

const mapDispatchToProps = {
  updateHeader: updateHeaderAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
