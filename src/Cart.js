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

    render(){
        const {products} = this.state;
        return(
            <div className= "cart">
                {products.map((product)=>{
                    return (
                        <CartItem 
                            product={product} 
                            key={product.id}
                        />
                    )
                
                })}
            </div>
        )
        
    }
}


export default Cart;