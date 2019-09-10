import React, { Fragment } from "react";
import BurgerBuildContainer from "./BurgerBuildContainer";
import Ingredients from "../Components/Ingredients.js";
// import Countdown from 'react-countdown-now'
import Timer from "../Components/Timer";
import EndGame from "../Components/EndGame";
import Customers from "../Components/Customers";

export default class GameContainer extends React.Component {
  constructor() {
    super();
    this.state = this.initialState;
  }

  get initialState() {
    return {
      currentBurger: [],
      currentBurger2: [],
      currentOrderNumber: null,
      currentScore: 0,
      clickCounter: 0,
      gameEnded: false,
      modalState: false,
      lastScore: 0,
      currentOrderNumber1: 2,
      currentOrderNumber2: 3,
      currentOrderNumber3: 4,
      currentOrderNumber4: 5
    };
  }

  buildBurger = ingr => {
    if (this.state.clickCounter < 10) {
      this.setState({
        currentBurger: [...this.state.currentBurger, ingr],
        currentBurger2: [...this.state.currentBurger, ingr],
        clickCounter: this.state.clickCounter + 1
      });
    } else {
      alert("stahp");
      // this.setState({
      //   currentBurger: [],
      //   currentBurger2: [],
      //   clickCounter: 0
      // })
    }
  };

  burgerSubmit = () => {
    console.log("clicking the bunnnn");

    let results = [];

    if (this.state.currentOrderNumber !== null) {
    for (let i = 0; i < this.state.currentBurger.length; i++) {
      if (this.state.currentBurger[i].name === this.props.orders[this.state.currentOrderNumber][i]) {
        results.push(true);
      }
    }

      if (results.length === 4) {
        let update = this.state.currentScore;
        this.setState({ currentScore: update + 1 });
      } else {
        console.log("oops");
      }

      this.setState({
        currentBurger: [],
        currentBurger2: [],
        currentOrderNumber: null,
        currentOrderNumber1:
          Math.floor(Math.random() * Object.keys(this.props.orders).length) + 1,
        currentOrderNumber2:
          Math.floor(Math.random() * Object.keys(this.props.orders).length) + 1,
        currentOrderNumber3:
          Math.floor(Math.random() * Object.keys(this.props.orders).length) + 1,
        currentOrderNumber4:
          Math.floor(Math.random() * Object.keys(this.props.orders).length) + 1,
        clickCounter: 0
      });
    } else {
      alert('Oh hey, you gotta pick a burger to build before you can submit it! See the four orders below the bottom bun.')
    }
  } 

  changeGameState = () => {
    this.setState({
      ...this.initialState,
      gameEnded: !this.state.gameEnded,
      modalState: !this.state.modalState,
      lastScore: this.state.currentScore
    });
  };

  customerOrders = () => {
    return this.props.orders[
      Math.floor(Math.random() * Object.keys(this.props.orders).length) + 1
    ];
  };

  removeIngredient = () => {
    this.state.currentBurger.pop();
    this.state.currentBurger2.shift();

    this.setState({
      currentBurger: this.state.currentBurger,
      currentBurger2: this.state.currentBurger2.reverse(),
      clickCounter: this.state.clickCounter - 1
    });
  };

  selectOrder = orderNumber => {
    this.setState({ currentOrderNumber: orderNumber });
  };

  render() {
    return (
      <Fragment>
        {this.state.gameEnded === false ? (
          <div>
            <h1> 🍔 Top Bun 🍔 </h1>

            <Ingredients
              buildBurger={this.buildBurger}
              burgerSubmit={this.burgerSubmit}
            />

            <div className="columns">
              <div className="column">
                {this.props.orders[this.state.currentOrderNumber]
                  ? this.props.orders[this.state.currentOrderNumber]
                      .slice(0)
                      .reverse()
                      .map((ingr, index) => (
                        <p>
                          <img
                            style={{
                              margin: "-45px",
                              zIndex: `-${index}`,
                              position: "relative",
                              backgroundSize: "contain"
                            }}
                            height="65%"
                            width="65%"
                            alt=""
                            src={require(`../images/${ingr}.png`)}
                            key={Math.floor(Math.random() * 1000000) + 1}
                          ></img>
                        </p>
                      ))
                  : null}
              </div>

              <div className="column is-three-fifths">
                {/** rendering current order to be fulfilled **/}
                <BurgerBuildContainer
                  burger={this.state.currentBurger2}
                  orders={this.props.orders}
                  removeIngredient={this.removeIngredient}
                  />

              </div>

        

              <div className="column">
                <h3>Current score: {this.state.currentScore}</h3>
                <Timer changeGameState={this.changeGameState} />
              </div>
            </div>

            {/* the div below renders the four random customer orders the user can pick to build next */}
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end"
              }}
            >
              <Customers
                selectOrder={this.selectOrder}
                order={this.props.orders[this.state.currentOrderNumber1]}
                orderNumber={this.state.currentOrderNumber1}
              />
              <Customers
                selectOrder={this.selectOrder}
                order={this.props.orders[this.state.currentOrderNumber2]}
                orderNumber={this.state.currentOrderNumber2}
              />
              <Customers
                selectOrder={this.selectOrder}
                order={this.props.orders[this.state.currentOrderNumber3]}
                orderNumber={this.state.currentOrderNumber3}
              />
              <Customers
                selectOrder={this.selectOrder}
                order={this.props.orders[this.state.currentOrderNumber4]}
                orderNumber={this.state.currentOrderNumber4}
              />
            </div>
          </div>
        ) : (
          <EndGame
            exitGame={this.props.exitGame}
            showModal={this.state.modalState}
            lastScore={this.state.lastScore}
            changeGameState={this.changeGameState}
          />
        )}
      </Fragment>
    );
  }
}


{
  /* <div> */
}
{
  /* {this.props.orders[this.state.currentOrderNumber1].map( ingr =>  <div style={{display: 'flex', flexDirection: 'column'}} key={Math.floor(Math.random() * 1000000) + 1}>{ingr}</div> )} */
}
{
  /* </div> */
}
