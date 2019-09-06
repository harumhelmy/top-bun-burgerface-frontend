import React from "react";
import BurgerBuildContainer from "./BurgerBuildContainer";
import Ingredients from "../Components/Ingredients.js";

const orders = {
  one: ["patty", "tomato", "lettuce", "pickles"],
  two: ["lettuce", "tomato", "patty", "pickles"],
  three: ["pickles", "tomato", "lettuce", "patty"],
  four: ["patty", "pickles", "lettuce", "tomato"]
};

export default class GameContainer extends React.Component {
  
  constructor() {
      super();
      this.state = {
          currentBurger: [],
          currentBurger2: [],
          currentOrderNumbers: [],
          currentScore: 0
      };
  }

  buildBurger = (ingr) => {

    this.setState({
      currentBurger: [...this.state.currentBurger, ingr],
      currentBurger2: [...this.state.currentBurger, ingr]
    })
  }

  burgerSubmit = () => {
    console.log('clicked the bun')

    let results = []

    for (let i=0; i < this.state.currentBurger.length; i++){
      if( this.state.currentBurger[i].name !== orders.one[i] ){
        results.push(false) 
      } 
    }

     results.length > 0 ? console.log('bye') : this.setState({ currentScore: this.state.currentScore + 1 })
  
     this.setState({
       currentBurger: [],
       currentBurger2: []
     })
     
  }

  reverseBurger = () =>{
    let completedBurger = this.state.currentBurger2
    return completedBurger
  }
        
    // console.log('did the burger')
    // this.setState({
    //   currentScore: this.state.currentScore + 1,
    //   currentBurger: []

  render() {
    return (
      <div>
        <Ingredients buildBurger={this.buildBurger}
          burgerSubmit={this.burgerSubmit}
        />
        <BurgerBuildContainer reverseBurger={this.reverseBurger()} orders={orders} />

      </div>
    );
  }
}
