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
      currentOrderNumber1: Math.floor(Math.random() * 10) + 1,
      currentOrderNumber2: Math.floor(Math.random() * 10) + 1,
      currentOrderNumber3: Math.floor(Math.random() * 10) + 1,
      currentOrderNumber4: Math.floor(Math.random() * 10) + 1,
      currentCustomerTimerInterval: 0
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
    }
  };

  burgerSubmit = () => {
    console.log("clicking the bunnnn");

    let results = [];

    // console.log(this.state.currentCustomerTimerInterval)

    clearInterval(this.state.currentCustomerTimerInterval)

    if (this.state.currentOrderNumber !== null) {
      for (let i = 0; i < this.state.currentBurger.length; i++) {
        if (
          this.state.currentBurger[i].name ===
          this.props.orders[this.state.currentOrderNumber][i]
        ) {
          results.push(true);
        }
      }

      if (results.length === 4) {
        let update = this.state.currentScore;
        this.setState({ currentScore: update + 1 });
      } else {
        this.setState({
          incorrectBurger: true
        });
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
      alert(
        "Oh hey, you gotta pick a burger to build before you can submit it! See the four orders below the bottom bun."
      );
    }
  };

  changeGameState = () => {
    console.log(this.state.currentScore)
    this.setState({
      ...this.initialState,
      gameEnded: !this.state.gameEnded,
      modalState: !this.state.modalState,
      lastScore: this.state.currentScore
    });

  
    if (this.state.currentScore > this.props.currentPlayer.high_score) {
      console.log(this.props.currentPlayer.id)
      const data = {
        high_score: this.state.currentScore 
      } 

      fetch(`http://localhost:3000/players/${this.props.currentPlayer.id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({data})
      })
        .then( res => res.json())
        .then( player => this.props.updatePlayer(player) )
    };
  }

  customerOrders = () => {
    return this.props.orders[
      Math.floor(Math.random() * Object.keys(this.props.orders).length) + 1
    ];
  };

  removeIngredient = () => {
    console.log('attempting to remove')
    this.state.currentBurger.pop();
    this.state.currentBurger2.pop();

    this.setState({
      currentBurger: this.state.currentBurger,
      currentBurger2: this.state.currentBurger2,
      clickCounter: this.state.clickCounter - 1
    });
  };

  selectOrder = (event, orderNumber, intervalId) => {
    console.log(intervalId)
    this.setState({ 
      currentOrderNumber: orderNumber,
      currentCustomerTimerInterval: intervalId
    });
  };

  reverseIncorrectBurger = () => {
    setTimeout(() => {
      this.setState({ incorrectBurger: false });
    }, 2000);
  };

  // componentWillUnmount = () => {
  //   this.clearTimeouts()
  // }

  getNewOrderNumber = (customerId) => {
    this.setState({
      [`currentOrderNumber${customerId}`]: Math.floor(Math.random() * Object.keys(this.props.orders).length) + 1,
      currentOrderNumber: null
    })
  }

  render() {
    // console.log(this.props.currentPlayer)
    
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
                {" "}
                {/** rendering current order to be fulfilled **/}
                {this.props.orders[this.state.currentOrderNumber]
                  ? this.props.orders[this.state.currentOrderNumber]
                      .slice(0)
                      .reverse()
                      .map((ingr, index) => (
                        <p key={Math.floor(Math.random() * 1000000) + 1}>
                          <img
                            style={{
                              margin: "-45px",
                              zIndex: `-${index}`,
                              position: "relative",
                              backgroundSize: "contain"
                            }}
                            height="50%"
                            width="50%"
                            alt=""
                            src={require(`../images/${ingr}.png`)}
                          ></img>
                        </p>
                      ))
                  : null}
              </div>

              <div className="column is-three-fifths">
                {" "}
                {/** this is where the magic of ingredient stacking happens **/}
                <BurgerBuildContainer
                  burger={this.state.currentBurger2}
                  orders={this.props.orders}
                  removeIngredient={this.removeIngredient}
                />
              </div>

              <div className="column">
                  {" "}
                {/** rendering the current score, timer, and conditionally, an alert to show when someone built the wrong burger **/}
                <h3>Current score: {this.state.currentScore}</h3>
                <h3>Your high score: { 
                  this.state.currentScore > this.props.currentPlayer.high_score 
                  ? this.state.currentScore
                  : this.props.currentPlayer.high_score
                  }
                </h3>
                <Timer changeGameState={this.changeGameState} />
                {this.state.incorrectBurger ? (
                  <div>
                    <h3>Oop, you made the wrong burger!</h3>
                    {this.reverseIncorrectBurger()}
                  </div>
                ) : null}
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
                customerId={1}
                getNewOrderNumber={this.getNewOrderNumber}
              />
              <Customers
                selectOrder={this.selectOrder}
                order={this.props.orders[this.state.currentOrderNumber2]}
                orderNumber={this.state.currentOrderNumber2}
                customerId={2}
                getNewOrderNumber={this.getNewOrderNumber}
              />
              <Customers
                selectOrder={this.selectOrder}
                order={this.props.orders[this.state.currentOrderNumber3]}
                orderNumber={this.state.currentOrderNumber3}
                customerId={3}
                getNewOrderNumber={this.getNewOrderNumber}
              />
              <Customers
                selectOrder={this.selectOrder}
                order={this.props.orders[this.state.currentOrderNumber4]}
                orderNumber={this.state.currentOrderNumber4}
                customerId={4}
                getNewOrderNumber={this.getNewOrderNumber}
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
