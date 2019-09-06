import React from 'react'


export default class BurgerBuildContainer extends React.Component{

        reverseBurger2 = () => {
            let reverseBurger2 = this.props.reverseBurger.reverse()
           
            return reverseBurger2
        }

    render(){
        return(
            <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>{this.reverseBurger2().map(ingredient => <p key={ingredient.name}><img src={require(`../images/${ingredient.name}.png`)}/></p>)}
        <br/>
        <img src={require('../images/bottom_bun.png')}/>
            </div>
        )
    }

}