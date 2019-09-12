import React from 'react'
import {Link} from 'react-router-dom'


const welcomeToTheThunderDome = () =>{
    return(
        <div>
            <h1>Welcome to <strong>Top Bun: BurgerFace Edition</strong></h1>
            <div>
                <Link to='/login' style={{color: 'white'}}> <button>Click here to login</button> </Link>
            <br/>
            <br/>
            <br/>
            <img src={require(`./images/welcome-page.png`)} />
           </div>
        </div>
    )
}

export default welcomeToTheThunderDome