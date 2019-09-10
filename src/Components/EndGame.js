import React from "react";

const EndGame = props => {
  return (
    <div>
      <button onClick={props.changeGameState}>
        Start another game
      </button>

      <button onClick={props.exitGame}>Exit game</button>
    </div>
  );
};

export default EndGame;
