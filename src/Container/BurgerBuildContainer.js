import React from "react";

export default class BurgerBuildContainer extends React.Component {
  render() {
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
        {this.props.burger.reverse().map(ingredient => (
          <p key={Math.floor(Math.random() * 1000000) + 1}>
            <img src={require(`../images/${ingredient.name}.png`)} />
          </p>
        ))}
        <br />
        <img src={require("../images/bottom_bun.png")} />
      </div>
    );
  }
}
