import React from "react";
import BurgerBuildContainer from "./BurgerBuildContainer";
import Ingredients from "../Components/Ingredients.js";

const orders = {
  1: ["patty", "tomato", "lettuce", "pickle"],
  2: ["lettuce", "tomato", "patty", "pickle"],
  3: ["pickle", "tomato", "lettuce", "patty"],
  4: ["patty", "pickle", "lettuce", "tomato"]
};

export default class GameContainer extends React.Component {
  
  
constructor() {
    super();
    this.state = {
        currentBurger: [],
        currentOrderNumbers: []
    };
  }

  render() {
    return (
      <div>
        <Ingredients />
        <BurgerBuildContainer orders={orders} />
      </div>
    );
  }
}
