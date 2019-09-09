import React from "react";
import BurgerBuildContainer from "./BurgerBuildContainer";
import Ingredients from "../Components/Ingredients.js";
// import Countdown from 'react-countdown-now'
import Timer from "../Components/Timer"
import EndGame from "../Components/EndGame"

export default class GameContainer extends React.Component {

  constructor() {
    super();
    this.state = {
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
    debugger
    let results = [];

    for (let i = 0; i < this.state.currentBurger.length; i++) {
      if (this.state.currentBurger[i].name !== this.props.orders[this.state.currentOrderNumber][i]) {
        results.push(false);
      }
    }

    results.includes(false)
      ? console.log(results)
      : this.setState({ currentScore: this.state.currentScore + 1 });

    this.setState({
      currentBurger: [],
      currentBurger2: [],
      currentOrderNumber: Math.floor(Math.random() * Object.keys(this.props.orders).length) + 1,
      clickCounter: 0
    });
  };

  endGame = () => {
    this.setState({
      gameEnded: true
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
              this.props.orders[this.state.currentOrderNumber].map( ingr => <p>{ingr}</p> )
            }
            </ul>

            <BurgerBuildContainer
              burger={this.state.currentBurger2}
              orders={this.props.orders}
              removeIngredient={this.removeIngredient}
            />

            <Timer endGame={this.endGame} />

            <h3>Current score: {this.state.currentScore}</h3>
          </div>
          : 
            <EndGame exitGame={this.props.exitGame} currentScore={this.state.currentScore} />        
      }
      </div>
    );
  }
}
