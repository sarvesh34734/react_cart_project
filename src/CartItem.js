import React from 'react';


class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:999,
            title:'Phone',
            qty:1,
            img:''
        }
    }
    increaseQuantity = () => {
        console.log('this',this);
        this.setState({
            qty:this.state.qty+1
        })
    }
    decreaseQuantity = ()=>{
        if(this.state.qty>1){
            this.setState({
                qty:this.state.qty-1
            })
        }
    }
    render(){
        const {price,title,qty} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25,fontWeight:'bolder'}}>{title}</div>
                    <div>price: {price}</div>
                    <div>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt="increase"
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/864/864378.svg" 
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/864/864373.svg" 
                            onClick={this.decreaseQuantity}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/3209/3209887.svg" 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

// styling image
const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:1,
        background:'#ccc'
    }
}

export default CartItem;