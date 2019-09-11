import React, { Fragment } from "react";

export default class BurgerBuildContainer extends React.Component {
  render() {
    return (
      <Fragment>
        <br />
        <br />
        <br />
        <br />
        <br />

        <div
          
          style={{
            height: "500px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            margin: '0 auto',
            // backgroundImage: `url(${require('../images/TomCruise.jpg')})`,
            // require(`../images/${ingr}.png`)
            // require(`../images/${ingr.name}.png`),
            backgroundSize: '100% 100%'
            
          }}
        >
          {this.props.burger.slice(0).reverse().map((ingredient, index) => (
              <p
                key={Math.floor(Math.random() * 1000000) + 1}
                style={{ top: `${180 - index * 10}` }}
              >
                <img
                  alt=""
                  style={{
                    margin: "-90px",
                    zIndex: `-${index}`,
                    position: "relative",
                    backgroundSize: "contain"
                  }}
                  src={require(`../images/${ingredient.name}.png`)}
                />
              </p>
            ))}
          <br />

          <div style={{ position: "relative", zIndex: "-10", margin: "-35px" }}>
            <img alt="" src={require("../images/bottom_bun.png")} />
          </div>
          <br />
          <br />
          <br />
          <button className="button" onClick={this.props.removeIngredient}>
            Remove last added ingredient
          </button>
        </div>
      </Fragment>
    );
  }
}
