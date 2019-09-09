import React, {Fragment} from "react";

export default class BurgerBuildContainer extends React.Component {

  render() {
    
    return (
      <Fragment> 
          <br />
          <br />
          <br />
          <button onClick={this.props.removeIngredient}>Remove last added ingredient</button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

        <div style={{height: '230px', position: 'relative'}}>
          
          { this.props.burger.reverse().map( (ingredient, index) => (
            <p key={Math.floor(Math.random() * 1000000) + 1}
              style={{top: `${180 - index * 10}`}}
            >
              <img style={{margin: '-45px', zIndex: `-${index}`, position: 'relative', backgroundSize: 'contain'}}
                src={require(`../images/${ingredient.name}.png`)} />
            </p>
          ) ) }
          <br />
        </div>

        <div style={{position: 'relative', zIndex: '-10', margin: '-25px'}}>
          <img src={require("../images/bottom_bun.png")} />
        </div>

      </Fragment>
    );
  }
}
