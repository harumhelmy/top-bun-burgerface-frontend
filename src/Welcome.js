import React from 'react'

const Welcome = (props) => {
  return(
    <div>
      <h1>Welcome to Top Bun BurgerFace</h1>
      <button onClick={ () => props.startGame()}>Start Game</button>
      <button onClick={props.logout}>Logout</button>
    </div>
  )
}

export default Welcome 