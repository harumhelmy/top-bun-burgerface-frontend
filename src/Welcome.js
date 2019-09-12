import React from 'react'
import {Link} from 'react-router-dom'


const Welcome = (props) => {
  return(
    <div>
      <h1>Welcome to Top Bun BurgerFace</h1>
      <h3>Hi there friend! Your goal today is to build as many burgers as possible in 30 seconds. 
        To win a score, each ingredient in the burger needs to be in the order specified by the current customer's order. 
        The top bun is your submit button. </h3>
       <Link to='/game'><button onClick={()=>props.startGame()}>Start Game</button> </Link> 
      <button onClick={props.logout}>Logout</button>
    </div>
  )
}

export default Welcome 