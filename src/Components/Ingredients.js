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

const Ingredients= () =>{
  return (
    <div>
      {
        ingredients.map( ingr => 
          <div>
            {ingr.name} 
            <img src={(require(`${ingr.img_url}`))} />
          </div> 
        )
      }
    </div>
  )
}


export default Ingredients