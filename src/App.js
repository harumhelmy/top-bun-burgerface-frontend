import React, {Fragment} from 'react';
import Login from './Login'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Welcome from './Welcome'
import GameContainer from './Container/GameContainer'

const playerUrl = 'http://localhost:3000/players'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      loginName: '',
      allPlayers: [],
      currentPlayer: '',
      gameStarted: false
    }
  }

  getLoginName = (event) => {
    this.setState({
      loginName: event.target.value
    })
  }

  componentDidMount(){
    fetch(playerUrl)
    .then(res => res.json())
    .then(allPlayers => this.setState({
      allPlayers
    }))
  }

  startGame = () => {
    this.setState({
      gameStarted: true
    })
  }

  onLogin = (event) => {
    event.preventDefault()
    const player = this.state.allPlayers.filter( player => 
      player.name.toLowerCase() === this.state.loginName.toLowerCase())

      player.length === 0 ? alert('no thanks') :
      this.setState({
        currentPlayer: player[0]
      })
  }



  logout = () =>{
    this.setState({
      currentPlayer: '',
      loginName: ''
    })
  }

  render(){
    return (
      <div className="App">
        <Router>
            <Route exact path='/' render={ () => <Login 
              loginName={this.state.loginName}
              getLoginName={this.getLoginName}
              onLogin={this.onLogin}
              currentPlayer={this.state.currentPlayer} />
              }
            />
        </Router>
        {this.state.gameStarted ? <GameContainer /> : null}
       
        {
          this.state.currentPlayer && !this.state.gameStarted ? <Welcome logout={this.logout} startGame={this.startGame}/>
          : 
          null
        }
      </div>
    );
  }
}

export default App;
