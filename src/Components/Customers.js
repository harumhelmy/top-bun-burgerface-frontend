import React, {Fragment} from "react";




export default class Customers extends React.Component {






    render(){
      
        return(
            <div >
           
            {this.props.order.map( ingr =>  <div style={{position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flext-end'}} key={Math.floor(Math.random() * 1000000) + 1}>{ingr}</div> )}
                <img onClick={() => this.props.selectOrder(this.props.orderNumber)} alt='' height="25%" width="25%"src='https://thenypost.files.wordpress.com/2016/09/tv_simpsons_homer1-1a.jpg?quality=90&strip=all&strip=all'/>
            
                </div>
        )
    }

}

