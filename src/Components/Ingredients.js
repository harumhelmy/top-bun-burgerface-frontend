import React from 'react'

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
  }
]

const Ingredients= (props) =>{
  return (
    <div>
      {
        ingredients.map( ingr =>           
          <div style={{display: "inline"}} onClick={ ()=>{props.buildBurger(ingr)} }>
            {ingr.name}
            <img src={require(`../images/${ingr.name}.png`)}/>
          </div>
        )
      }
      <img src={require('../images/top_bun.png')} onClick={()=>props.burgerSubmit()} />

    </div>
  )
}


export default Ingredients