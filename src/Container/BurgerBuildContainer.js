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
            zIndex: "-100",
            height: "730px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            // backgroundColor: "blue",
            backgroundImage: `url(https://i.pinimg.com/originals/63/31/41/633141d9dc16e37c20fa6337e3a9c6ef.jpg)`,
            backgroundSize: '100% 100%'
            // src={require(`../images/${ingr.name}.png`)
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
