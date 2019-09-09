import React from 'react'

export default class Timer extends React.Component {

  constructor(){
    super()
    this.state = {
      gameTimer: 30
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
    // }, this.props.endGame
    })
  }

  componentWillUnmount = () => {
    clearInterval(this.interval)
  }

  render () {

    return (
      <div>
        <h4>{this.state.gameTimer}</h4>
      </div>
    )}

}