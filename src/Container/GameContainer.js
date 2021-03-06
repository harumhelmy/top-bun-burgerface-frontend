import React, { Fragment } from "react";
import BurgerBuildContainer from "./BurgerBuildContainer";
import Ingredients from "../Components/Ingredients.js";
// import Countdown from 'react-countdown-now'
import Timer from "../Components/Timer";
import EndGame from "../Components/EndGame";
import Customers from "../Components/Customers";


const characters = ['Bart', 'Bobby', 'Cookie', 'Fry', 'Homer', 'Kirby', 'Patrick', 'Kid', 'Tina', 'Tom', 'Val', 'Winnie']

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
      currentOrderNumber1: Math.floor(Math.random() * 50) + 1,
      currentOrderNumber2: Math.floor(Math.random() * 50) + 1,
      currentOrderNumber3: Math.floor(Math.random() * 50) + 1,
      currentOrderNumber4: Math.floor(Math.random() * 50) + 1,
      currentPic1: characters[Math.floor(Math.random()*characters.length)],
      currentPic2: characters[Math.floor(Math.random()*characters.length)],
      currentPic3: characters[Math.floor(Math.random()*characters.length)],
      currentPic4: characters[Math.floor(Math.random()*characters.length)]
    };
  }

  buildBurger = ingr => {
    if (this.state.clickCounter < 6) {
      this.setState({
        currentBurger: [...this.state.currentBurger, ingr],
        currentBurger2: [...this.state.currentBurger, ingr],
        clickCounter: this.state.clickCounter + 1
      });
    } else {
      alert("HAPPY BIRTHDAY CHINE!");
    }
  };

  burgerSubmit = () => {
    console.log("clicking the bunnnn");

    let results = [];

    if (this.state.currentOrderNumber !== null) {
      for (let i = 0; i < this.state.currentBurger.length; i++) {
        if (
          this.state.currentBurger[i].name ===
          this.props.orders[this.state.currentOrderNumber][i]
        ) {
          results.push(true);
        }
      }

      if (results.length === 5) {
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
        clickCounter: 0,
        currentPic1: characters[Math.floor(Math.random()*characters.length)],
        currentPic2: characters[Math.floor(Math.random()*characters.length)],
        currentPic3: characters[Math.floor(Math.random()*characters.length)],
        currentPic4: characters[Math.floor(Math.random()*characters.length)]
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
        .then( player => this.props.updatePlayer(player))
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

  selectOrder = orderNumber => {
    this.setState({ currentOrderNumber: orderNumber });
  };

  reverseIncorrectBurger = () => {
    setTimeout(() => {
      this.setState({ incorrectBurger: false });
    }, 2000);
  };

  // componentWillUnmount = () => {
  //   this.clearTimeouts()
  // }

  render() {
    // console.log(this.props.currentPlayer)

    return (
      <Fragment>
        {this.state.gameEnded === false ? (
          <div style={{height: '100vh'}}>
            <h1> 🍔 Top Bun 🍔 </h1>

            <Ingredients
              buildBurger={this.buildBurger}
              burgerSubmit={this.burgerSubmit}
            />

            <div className="columns">

              <div className="column">
              
                {/** rendering current order to be fulfilled **/}

                {
                  this.state.currentOrderNumber === null 
                  ? <h3>Pick a burger to build from the four random orders at the bottom of the page.</h3>
                  : <h3>Build this burger! Quick quick!</h3>
                }

                {this.state.incorrectBurger ? (
                  <div>
                    <h3 style={{backgroundColor: 'red'}}> Oop, that burger was incorrect!</h3>
                    {this.reverseIncorrectBurger()}
                  </div>
                ) : null}
                
                <br/>

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
                {/** this is where the magic of ingredient stacking happens **/}
                <BurgerBuildContainer
                  burger={this.state.currentBurger2}
                  orders={this.props.orders}
                  removeIngredient={this.removeIngredient}
                />
              </div>

              <div className="column">
                {/** rendering the current score, timer, and conditionally, an alert to show when someone built the wrong burger **/}
                <h3>Current score: {this.state.currentScore}</h3>

                <h3>Your high score: { 
                  this.state.currentScore > this.props.currentPlayer.high_score 
                  ? this.state.currentScore
                  : this.props.currentPlayer.high_score
                  }
                </h3>

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
                justifyContent: "center",
               
              }}
            >
              <Customers
                selectOrder={this.selectOrder}
                order={this.props.orders[this.state.currentOrderNumber1]}
                orderNumber={this.state.currentOrderNumber1}
                currentPic={this.state.currentPic1}
              />
              <Customers
                selectOrder={this.selectOrder}
                order={this.props.orders[this.state.currentOrderNumber2]}
                orderNumber={this.state.currentOrderNumber2}
                currentPic={this.state.currentPic2}
              />
              <Customers
                selectOrder={this.selectOrder}
                order={this.props.orders[this.state.currentOrderNumber3]}
                orderNumber={this.state.currentOrderNumber3}
                currentPic={this.state.currentPic3}
              />
              <Customers
                selectOrder={this.selectOrder}
                order={this.props.orders[this.state.currentOrderNumber4]}
                orderNumber={this.state.currentOrderNumber4}
                currentPic={this.state.currentPic4}
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
