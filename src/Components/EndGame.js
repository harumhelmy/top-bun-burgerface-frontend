import React from "react";

const EndGame = ( { changeGameState, exitGame, showModal, lastScore } ) => {

  const showHideClassName = showModal ? 'modal is-active' : 'modal display-none'
  // debugger 

  return (
    <div className={showHideClassName}>
     <div className='modal-background'></div>
     <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Time's up!</p>
      </header>
      <section class="modal-card-body">
        Nice work! You successfully made {lastScore} 🍔s. 
      </section>
        <button className='button'
          onClick={changeGameState}>
          Start another game
        </button>

        <button className='button'
          onClick={exitGame}>Exit game</button>
      </div>
    </div>
  );
};

export default EndGame;
