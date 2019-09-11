import React from "react";

export default class Customers extends React.Component {

    constructor(){
        super()
        this.state = {
            customerTimer: Math.floor(Math.random() * 12) + 6,
            timerInterval: 0
        }
    }

    startTimer = () => {
        this.interval = setInterval(this.countdown, 1000)

        this.setState({
            timerInterval: this.interval
        })
    }

    countdown = () => {
        if (this.state.customerTimer > 0) {
        this.setState({
          customerTimer: this.state.customerTimer - 1
        })
        } else { 
            clearInterval(this.interval)
            this.setState({
                customerTimer: Math.floor(Math.random() * 12) + 6
            }, () => this.props.getNewOrderNumber(this.props.customerId)
            )
        }
    }

    // componentDidUpdate(prevProps){
    //     debugger
    //     // if (this.props.orderNumber !== prevProps.orderNumber){
    //     //     // clearInterval(this.interval)
    //     //     // this.setState({
    //     //     //     customerTimer: Math.floor(Math.random() * 12) + 6
    //     //     // })
    //     // }
    // }

    // componentWillUnmount(){
    //     console.log('unmounted')
    //     clearInterval(this.interval)
    // }

    // 

    render(){
          
      return (
            <div style={{position: 'relative', display: "flex", flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center' }} 
                onClick={(event) => {this.props.selectOrder(event, this.props.orderNumber, this.state.timerInterval); this.startTimer()}}>

                <div style={{position: 'relative', display: "flex", flexDirection: 'column', justifyContent: 'flex-end' }}>

                    {this.props.order.slice(0).reverse().map( (ingr, index) => 
                        <p style={{position: 'relative', display: "flex", alignItems: 'center', flexDirection: 'column', justifyContent: 'flex-end' }} 
                            key={Math.floor(Math.random() * 1000000) + 1}><img style={{marginTop: '-60px', zIndex: `-${index}`, position: 'relative'}} 
                            height="75%" 
                            width="75%" 
                            alt='' 
                            src={require(`../images/${ingr}.png`)} ></img>
                        </p> )}
                    {this.state.customerTimer}

                </div>
           
                    <img margin='-100px' alt='' height="25%" width="25%"src='https://thenypost.files.wordpress.com/2016/09/tv_simpsons_homer1-1a.jpg?quality=90&strip=all&strip=all'/>
                
            </div>
        )
    }

}

