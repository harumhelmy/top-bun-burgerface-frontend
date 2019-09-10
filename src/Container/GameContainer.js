import React from "react";
import BurgerBuildContainer from "./BurgerBuildContainer";
import Ingredients from "../Components/Ingredients.js";
// import Countdown from 'react-countdown-now'
import Timer from "../Components/Timer"
import EndGame from "../Components/EndGame"

export default class GameContainer extends React.Component {

  constructor() {
    super();
    this.state = this.initialState
  }

  get initialState() {
   return {
      currentBurger: [],
      currentBurger2: [],
      currentOrderNumber: 1,
      currentScore: 0,
      clickCounter: 0,
      gameEnded: false 
    };
  }

  
  buildBurger = ingr => {
    if (this.state.clickCounter < 5) {
       this.setState({
          currentBurger: [...this.state.currentBurger, ingr],
          currentBurger2: [...this.state.currentBurger, ingr],
          clickCounter: this.state.clickCounter + 1
        })
    } else {
      alert("stahp");
      this.setState({
        currentBurger: [],
        currentBurger2: [],
        clickCounter: 0
      })
    }
  };

  burgerSubmit = () => {
    let results = [];

    for (let i = 0; i < this.state.currentBurger.length; i++) {
      if (this.state.currentBurger[i].name === this.props.orders[this.state.currentOrderNumber][i]) {
        results.push(true);
      }
    }

    if ( results.length === 4 ) {
      let update = this.state.currentScore
      this.setState({ currentScore: update + 1 });
    } else {
      console.log('wrong')
    }

    this.setState({
      currentBurger: [],
      currentBurger2: [],
      currentOrderNumber: Math.floor(Math.random() * Object.keys(this.props.orders).length) + 1,
      clickCounter: 0
    });
  };

  changeGameState = () => {
    this.setState({
      ...this.initialState,
      gameEnded: !this.state.gameEnded
    })
  }

  removeIngredient = () => {
    this.state.currentBurger.pop()
    this.state.currentBurger2.shift()

    this.setState({
      currentBurger: this.state.currentBurger,
      currentBurger2: this.state.currentBurger2.reverse(),
      clickCounter: this.state.clickCounter - 1 
    })
  }

  render() {
    return (
      <div>
        {
          this.state.gameEnded === false 
          ? 
          <div>
            
            <Ingredients
              buildBurger={this.buildBurger}
              burgerSubmit={this.burgerSubmit}
            />

            <h4> Current order to be fulfilled:  </h4>
            
            <ul>
            {
              this.props.orders[this.state.currentOrderNumber].map( ingr => <p key={Math.floor(Math.random() * 1000000) + 1}>{ingr}</p> )
            }
            </ul>

            <h3>Current score: {this.state.currentScore}</h3>

            <BurgerBuildContainer
              burger={this.state.currentBurger2}
              orders={this.props.orders}
              removeIngredient={this.removeIngredient}
            />

            

            <Timer changeGameState={this.changeGameState} />

          </div>
          : 
            <EndGame exitGame={this.props.exitGame} currentScore={this.state.currentScore} changeGameState={this.changeGameState}/>        
      }
      </div>
    );
  }
}
