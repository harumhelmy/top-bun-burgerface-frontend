import React from 'react'

export default class Timer extends React.Component {

  constructor(){
    super()
    this.state = {
      gameTimer: 999
    }
  }
  
  componentDidMount() {
    this.interval = setInterval(this.countdown, 1000)
  }

  countdown = () => {
    this.state.gameTimer > 0 
    ? 
    this.setState({
      gameTimer: this.state.gameTimer - 1
    })
    :
    this.setState({
      gameTimer: 0
    }, 
    this.props.changeGameState
    )
  }

  componentWillUnmount = () => {
    clearInterval(this.interval)
  }

  render () {

    return (
      <div>
        <h4>Seconds remaining: {this.state.gameTimer}</h4>
      </div>
    )}

}