import React, {Fragment} from "react";




export default class Customers extends React.Component {

    
    
    
    
    render(){
  
      
        return(
            <div style={{position: 'relative', display: "flex", flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center' }} onClick={() => this.props.selectOrder(this.props.orderNumber)} >
                <div style={{position: 'relative', display: "flex", flexDirection: 'column', justifyContent: 'flex-end' }}>
           {this.props.order.slice(0).reverse().map( (ingr, index) => <p style={{position: 'relative', display: "flex", alignItems: 'center', flexDirection: 'column', justifyContent: 'flex-end' }} key={Math.floor(Math.random() * 1000000) + 1}><img style={{marginTop: '-60px', zIndex: `-${index}`, position: 'relative'}} 
                height="75%" width="75%" alt='' src={require(`../images/${ingr}.png`)} ></img></p> )}
                </div>
            {/* {this.props.order.map( ingr =>  <div style={{position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end'}} key={Math.floor(Math.random() * 1000000) + 1}>{ingr}</div> )} */}
                <img margin='-100px' alt='' height="25%" width="25%"src='https://thenypost.files.wordpress.com/2016/09/tv_simpsons_homer1-1a.jpg?quality=90&strip=all&strip=all'/>
            
                </div>
        )
    }

}

