import React from "react";
import BurgerBuildContainer from "./BurgerBuildContainer";
import Ingredients from "../Components/Ingredients.js";
// import Countdown from 'react-countdown-now'
import Timer from "../Components/Timer"

const orders = {
  1: ["patty", "tomato", "lettuce", "pickles"],
  2: ["lettuce", "tomato", "patty", "pickles"],
  3: ["pickles", "tomato", "lettuce", "patty"],
  4: ["patty", "pickles", "lettuce", "tomato"]
};

export default class GameContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      currentBurger: [],
      currentBurger2: [],
      currentOrderNumber: 1,
      currentScore: 0,
      clickCounter: 0
    };
  }
  
  buildBurger = ingr => {
    console.log("hello");


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
    console.log("clicked the bun");

    let results = [];

    for (let i = 0; i < this.state.currentBurger.length; i++) {
      if (this.state.currentBurger[i].name !== orders[this.state.currentOrderNumber][i]) {
        results.push(false);
      }
    }

    results.includes(false)
      ? console.log(results)
      : this.setState({ currentScore: this.state.currentScore + 1 });

    this.setState({
      currentBurger: [],
      currentBurger2: [],
      currentOrderNumber: Math.floor(Math.random() * 4) + 1,
      clickCounter: 0
    });
  };

  render() {
    return (
      <div>
        <Ingredients
          buildBurger={this.buildBurger}
          burgerSubmit={this.burgerSubmit}
        />
          <h4>Current order to be fulfilled:  </h4>
          
          <ul>
          {
            orders[this.state.currentOrderNumber].map( ingr => <p>{ingr}</p> )
          }
          </ul>

        <BurgerBuildContainer
          burger={this.state.currentBurger2}
          orders={orders}
        />

        <Timer />

         <h3>Current score: {this.state.currentScore}</h3>


      </div>
    );
  }
}
