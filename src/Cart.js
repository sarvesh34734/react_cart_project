import React from 'react';
import CartItem from "./CartItem"

class Cart extends React.Component{

    constructor(){
        super();
        this.state = {
            products:[
                {
                    price:990,
                    title:"Phone",
                    qty:1,
                    img:"",
                    id:1
                },
                {
                    price:9900,
                    title:"Television",
                    qty:1,
                    img:"",
                    id:2
                },
                {
                    price:99000,
                    title:"Laptop",
                    qty:1,
                    img:"",
                    id:3
                },
                {
                    price:99,
                    title:"Watch",
                    qty:1,
                    img:"",
                    id:4
                }
            ]
        }

    }

    handleIncreasedQuantity = (product)=>{
        console.log("Hey! Please increase the quantity",product);
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty +=1;
        this.setState({
            products
        })
    }

    handleDecreasedQuantity = (product)=>{
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty>1){
            products[index].qty-=1;
        }
        this.setState({
            products
        })
    }

    handleDeleteProduct = (id) => {
        const {products} = this.state;
        const items = products.filter((item)=> item.id!==id );

        this.setState({
            products:items
        })
    }

    render(){
        const {products} = this.state;
        return(
            <div className= "cart">
                {products.map((product)=>{
                    return (
                        <CartItem 
                            product={product} 
                            key={product.id}
                            onIncreaseQuantity={this.handleIncreasedQuantity}
                            onDecreaseQuantity = {this.handleDecreasedQuantity}
                            onHandleDelete = {this.handleDeleteProduct}
                        />
                    )
                
                })}
            </div>
        )
        
    }
}


export default Cart;