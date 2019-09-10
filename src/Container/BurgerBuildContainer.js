import React, {Fragment} from "react";

export default class BurgerBuildContainer extends React.Component {

  render() {
    
    return (
      <Fragment> 
          <br />
          <br />
          <br />
          <button className='button'
            onClick={this.props.removeIngredient}>
              Remove last added ingredient
          </button>
          <br />
          <br />


        <div style={{height: '330px', position: 'relative', display: "flex", flexDirection: 'column',  alignItems: 'center', justifyContent: 'flex-end'}}>
          
          { this.props.burger.reverse().map( (ingredient, index) => (
            <p key={Math.floor(Math.random() * 1000000) + 1}
              style={{top: `${180 - index * 10}`}} >
              <img alt="" style={{margin: '-90px', zIndex: `-${index}`, position: 'relative', backgroundSize: 'contain'}}
                src={require(`../images/${ingredient.name}.png`)} />
            </p>
          ) ) }
          <br />
        
          <div style={{position: 'relative', zIndex: '-10', margin: '-35px'}}>
            <img alt="" src={require("../images/bottom_bun.png")} />
          </div>
        </div>



      </Fragment>
    );
  }
}
