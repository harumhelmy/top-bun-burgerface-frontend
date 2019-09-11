import React from 'react';
import Login from './Login'
import './App.css';
// import '../node_modules/bulma/css/bulma.css'
import './App.sass' // in lieu of importing everything, we're only importing what we want
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Welcome from './Welcome'
import GameContainer from './Container/GameContainer'
import { Orders } from './Orders'
import ThunderDome from './ThunderDome'

const playerUrl = 'http://localhost:3000/players'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      loginName: '',
      allPlayers: [],
      currentPlayer: '',
      gameStarted: false, 
      orders: []
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
      allPlayers,
      orders: Orders()
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

      player.length === 0 
      ? 
      console.log(player)
      :
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

  exitGame = () => {
    console.log("exit game")
    this.setState({
      gameStarted: false
    })
  }

  render(){
    return (
      <div className="App" >
        <Router>
          
            <Route exact path='/login' render={ () => <Login 
              loginName={this.state.loginName}
              getLoginName={this.getLoginName}
              onLogin={this.onLogin}
              currentPlayer={this.state.currentPlayer} />
              }
            />
              <Route exact path='/' component={ThunderDome} />
        </Router>

        {this.state.gameStarted ? <GameContainer exitGame={this.exitGame} orders={this.state.orders}/> : null}
       
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
