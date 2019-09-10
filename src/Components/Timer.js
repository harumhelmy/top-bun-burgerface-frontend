import React from 'react'




export default class Timer extends React.Component {

  constructor(){
    super()
    this.state = {
      gameTimer: 10,
      modalIsOpen: false
    }
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
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
        <h4>{this.state.gameTimer}</h4>
      </div>
    )}

}