import React, {Fragment} from "react";

export default class BurgerBuildContainer extends React.Component {

  // constructor(){
  //   super()
  //   this.state = {
  //     "z-index": this.state['z-index'] + 1 
  //   }
  // }

  render() {

    // const burgerStyle = {
    //     margin: "-25px",
    //     "z-index": index,
    //     position: "relative"
    // }
    
    return (
      <Fragment> 
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        <div style={{height: '200px', position: 'relative'}}>
          
          { this.props.burger.reverse().map( (ingredient, index) => (
            <p key={Math.floor(Math.random() * 1000000) + 1}
              style={{top: `${180 - index * 10}`, position: 'aboslute'}}
            >
              <img style={{margin: '-45px', zIndex: `-${index}`, position: 'relative'}}
                src={require(`../images/${ingredient.name}.png`)} />
            </p>
          ) ) }
          <br />
        </div>

        

        <div style={{position: 'relative', zIndex: '-10'}}>
          <img src={require("../images/bottom_bun.png")} />
        </div>

      </Fragment>
    );
  }
}
