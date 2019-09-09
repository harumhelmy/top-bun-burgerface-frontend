const Ingredients = ["patty", "tomato", "lettuce", "pickles", "mushrooms", "fried-egg", "cheese"]

const Orders = () => {

    let allOrders = {}

    for(let i=1; i < 20; i++){
      let ordersArray = []

      for (let i=0; i < 4; i++){
        ordersArray.push(Ingredients[Math.floor(Math.random() * Ingredients.length)])
      }

      let orderObject = {[i]: ordersArray}
      allOrders = Object.assign({}, allOrders, orderObject)
    }

    return allOrders
}

export { Orders, Ingredients }
