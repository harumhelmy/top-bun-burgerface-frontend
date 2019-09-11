import React, { Fragment } from 'react'

const ingredients = [
  {
    name: "patty",
    img_url: "../images/patty.png"
  },
  {
    name: "tomato",
    img_url: "../images/tomato.png"
  },
  {
    name: "lettuce",
    img_url: "../images/lettuce.png"
  },
  {
    name: "pickles",
    img_url: "../images/pickles.png"
  },
  {
    name: 'mushrooms',
    img_url: '../images/mushrooms.png'
  },
  {
    name: 'cheese',
    img_url: '../images/cheese.png'
  },
  {
    name: 'fried-egg',
    img_url: '../images/fried-egg.png'
  } 
]  

let styling = {
    width: '10%',
    height: '10%',
    padding: '20px',
    backgroundSize: 'auto'
}

const Ingredients= (props) =>{

  return (
    <Fragment> 
      <div>
        {
          ingredients.map( ingr =>           
            <div key={ingr.name}  
              style={{display: "inline"}}
              onClick={ ()=>{props.buildBurger(ingr)} } 
              alt={ingr.name}
            >
              <img alt="" 
                style={styling}
                className='ingredients' 
                src={require(`../images/${ingr.name}.png`)}
              />
            </div>
          )
        }
        <div style={{zIndex: '999'}}>
          <img alt="" src={require('../images/top_bun.png')} 
            onClick={()=>props.burgerSubmit()} />
        </div>
      </div>
    </Fragment>
  )
}


export default Ingredients