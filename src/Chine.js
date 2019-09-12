import React, { Fragment } from 'react'


class  Chine extends React.Component {

    state ={
        color: ''
    }

    getRandomColor = () => {
        let letters = '0123456789ABCDEF';
        let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.setState({color});
  }


  componentDidMount = () => {
    this.interval = setInterval(this.getRandomColor, 1000)
  }
 componentWillUnmount = () => {
    clearInterval(this.interval)
  }

render(){
    return(
  <div style={{backgroundColor: this.state.color, height: '100vh',  display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
  
     <h1 >HAPPY BIRTHDAY CHINE</h1> 
        <h3>(Also Page Not Found)</h3>
   
  </div>)
}
}

export default Chine