import React from "react";

export default class BurgerBuildContainer extends React.Component {

  // constructor(){
  //   super()
  //   this.state = {
  //     "z-index": this.state['z-index'] + 1 
  //   }
  // }

  render() {
    const burgerStyle = {
        margin: "-25px",
        "z-index": "-1",
        position: "relative"
      }
    
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        { this.props.burger.reverse().map(ingredient => (
          <p key={Math.floor(Math.random() * 1000000) + 1}>
            <img style={burgerStyle}
              src={require(`../images/${ingredient.name}.png`)} />
          </p>
        ) ) }
        <br />
        <img src={require("../images/bottom_bun.png")} />
      </div>
    );
  }
}
