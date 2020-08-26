import React from 'react';
import CartItem from './CartItem'
import Cart from "./Cart"
import Navbar from "./Navbar"

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        products:[
            {
                price:990,
                title:"Phone",
                qty:1,
                img:"https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60",
                id:1
            },
            {
                price:9900,
                title:"Television",
                qty:1,
                img:"https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60",
                id:2
            },
            {
                price:99000,
                title:"Laptop",
                qty:1,
                img:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60",
                id:3
            },
            {
                price:99,
                title:"Watch",
                qty:1,
                img:"https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60",
                id:4
            }
        ]
    }

}

handleIncreasedQuantity = (product)=>{
    // console.log("Hey! Please increase the quantity",product);
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

getCartCount = () => {
  const {products} = this.state;
  let count = 0;
  products.forEach((product)=>{
    count+=product.qty;
  })
  return count;
}

getCartTotal = () => {
  const {products} = this.state;
  let total = 0;
  products.forEach((product)=>{
    total+= product.price*product.qty;
  })
  return total;
}

  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()}/>
        <Cart 
          products = {products}
          onIncreaseQuantity={this.handleIncreasedQuantity}
          onDecreaseQuantity = {this.handleDecreasedQuantity}
          onHandleDelete = {this.handleDeleteProduct}
        />
        <div style={{padding:20,fontSize:20}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
  
}


export default App;
