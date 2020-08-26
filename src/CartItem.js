import React from 'react';


class CartItem extends React.Component{
    
    // increaseQuantity = () => {
    //     // console.log('this',this.props);
    //     this.setState((prevState)=>{
    //         return {
    //             qty : prevState.qty + 1
    //         }
    //     },()=>{
    //         console.log("this.state",this.state);
    //     })
    //     // set state is asynchronous call and this.state will not get updated in this
    //     //console.log("this.state",this.state);
    // }
    // decreaseQuantity = ()=>{
    //     if(this.state.qty>1){
    //         this.setState({
    //             qty:this.state.qty-1
    //         })
    //     }
    // }
    render(){
        const {price,title,qty} = this.props.product;
        // console.log("this.props",this.props);
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
                            onClick={()=>this.props.onIncreaseQuantity(this.props.product)}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/864/864373.svg" 
                            onClick={()=>{this.props.onDecreaseQuantity(this.props.product)}}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/3209/3209887.svg" 
                            onClick = {()=>{this.props.onHandleDelete(this.props.product.id)}}
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