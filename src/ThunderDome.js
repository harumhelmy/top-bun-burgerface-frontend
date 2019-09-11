import React from 'react'
import {Link} from 'react-router-dom'
const welcomeToTheThunderDome = () =>{
    return(
        <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            <h1>This is the welcome page to <strong>Top Bun: BURGERFACE</strong></h1>
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
           <Link to='/login'> <button>Click here to Login</button> </Link>
           </div>
        </div>
    )
}

export default welcomeToTheThunderDome