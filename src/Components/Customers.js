import React from "react";




export default class Customers extends React.Component {

    
    render(){
  
      return(
            <div style={{position: 'relative', display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'flext-start'}} onClick={() => this.props.selectOrder(this.props.orderNumber)} >
                <div style={{position: 'relative', display: "flex", flexDirection: 'column', justifyContent: 'center' }}>

                <div style={{position: 'relative', display: "flex", flexDirection: 'column', justifyContent: 'flex-end' }}>

                        {this.props.order.slice(0).reverse().map( (ingr, index) => 
                            <p style={{position: 'relative', 
                            display: "flex", 
                            alignItems: 'flex-end', 
                            flexDirection: 'column', 
                            justifyContent: 'flex-end' }} 
                            key={Math.floor(Math.random() * 1000000) + 1}>

                                    <img style={{marginTop: '-80px', 
                                        marginBottom: '-30px',
                                        zIndex: `-${index}`, 
                                        position: 'relative'}} 
                                        height="45%" 
                                        width="45%" 
                                        alt='' 
                                        src={require(`../images/${ingr}.png`)} >
                                    </img>
                            </p> 
                        )}
                </div>
                            <p>
                        <img margin='50px' alt='' height="170px" width="190px"src={require(`../TopBunCharacters/${this.props.currentPic}.gif`)}/>
                            </p>

                
            
            </div>
            </div>
        )
    }

}

