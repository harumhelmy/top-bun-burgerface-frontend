let ingredients = ["patty", "tomato", "lettuce", "pickles", "mushrooms", "fried-egg", "cheese"]

let Orders = () => {

    let allOrders = {}

    for(let i=1; i < 7; i++){
      let ordersArray = []

      for (let i=0; i < 4; i++){
        ordersArray.push(ingredients[Math.floor(Math.random() * ingredients.length)])
      }

      let orderObject = {[i]: ordersArray}
      allOrders = Object.assign({}, allOrders, orderObject)
      debugger
    }

    return allOrders
}

// const Orders = {
//   1: ["patty", "tomato", "lettuce", "pickles"],
//   2: ["lettuce", "tomato", "patty", "pickles"],
//   3: ["pickles", "tomato", "lettuce", "patty"],
//   4: ["patty", "pickles", "lettuce", "tomato"]
// };

export default Orders