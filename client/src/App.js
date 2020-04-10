import React from 'react';
import './App.css';
import axios from 'axios'
import PlayerCard from './components/PlayerCard';
import useDarkMode from './hooks/useDarkMode';
import Button from './components/Button';
import { render, fireEvent } from "@testing-library/react";

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        players: []
      };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
    .then(response => {
      console.log(response.data)
      this.setState({
        players: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <Button />
        {this.state.players && this.state.players.map((item) => {
          return <PlayerCard key={item.id} players={item} name={item.name} country={item.country} searches={item.searches} />
        })}
      </div>
    )
  }
}

export default App;