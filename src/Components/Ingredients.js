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

let styling = {
    width: '100px',
    height: '100px',
    padding: '50px'
}

const Ingredients= (props) =>{

  return (
    <div>
      {
        ingredients.map( ingr =>           
          <div key ={ingr.name}  style={{display: "inline"}}onClick={ ()=>{props.buildBurger(ingr)} } alt=''>
            {ingr.name}
            <img style={styling} src={require(`../images/${ingr.name}.png`)}/>
          </div>
        )
      }
      <img src={require('../images/top_bun.png')} onClick={()=>props.burgerSubmit()} />

    </div>

  )
}


export default Ingredients