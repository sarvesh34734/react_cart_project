import React from 'react';
import CartItem from './CartItem'
import Cart from "./Cart"
import Navbar from "./Navbar"
import * as firebase from 'firebase'

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        products:[],
        loading:true
    }
    this.db = firebase.firestore();

}

// render firebase after our app gets mounted
// componentDidMount(){
  // console.log("mounted");
  // firebase
  //   .firestore()
  //   .collection('Product')
  //   .get()
  //   .then((snapshot)=>{
  //     console.log(snapshot);
  //     snapshot.docs.map((doc)=>{
  //       console.log(doc.data())
  //     })

  //     const products = snapshot.docs.map((doc)=>{
  //       const data = doc.data();
  //       data['id'] = doc.id;
  //       return data;
  //     })

  //     this.setState({
  //       products,
  //       loading:false
  //     })
  //   })

  //onsnapshot() attaches a listener to our app so if we make any changes in firebase it gets reflected in react app without refreshing it
  componentDidMount(){
  this
    .db
    .collection('Product')
    // .where("price","==",999) // used to write query to filter data
    // .where("title","==",'watch')
    // .orderBy("price","desc")     // sorts according to price default ascending
    .onSnapshot((snapshot) => {
        console.log(snapshot);

        snapshot.docs.map((doc) => {
          console.log(doc.data());
        })

        const products = snapshot.docs.map((doc) => {
            const data = doc.data();
            data['id'] = doc.id;
            return data;
        })

        this.setState({
          products,
          loading:false
        })
    })
  }





handleIncreasedQuantity = (product)=>{
    // console.log("Hey! Please increase the quantity",product);
    const {products} = this.state;
    const index = products.indexOf(product);
    // products[index].qty +=1;
    // this.setState({
    //     products
    // })

    // this.db
    //   .collection('Product')

    // get the reference to the document that is clicked
    const docRef = this.db.collection("Product").doc(products[index].id);

    // update the document
    docRef
      .update({
        qty : products[index].qty + 1
      })
      .then(() => {
        console.log('Updated Successfully');
      })
      .catch((error) => {
        console.log("Error => ",error)
      })
      
}

handleDecreasedQuantity = (product)=>{
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty>1){
      
      // reference to document
      const docRef = this.db.collection("Product").doc(products[index].id);

      // update the docref
      docRef.update({
        qty : products[index].qty - 1
      })
      .then(() => {
        console.log("Product Updated Successfully")
      })
      .catch((error) => {
        console.log("Error => ",error )
      })

    }
    // this.setState({
    //     products
    // })
}

handleDeleteProduct = (id) => {
    const {products} = this.state;
    // const index = products.indexOf(id);
    // const items = products.filter((item)=> item.id!==id );

    // this.setState({
    //     products:items
    // })

    // doc reference
    const docRef = this.db.collection("Product").doc(id);

    // delete
    docRef
      .delete()
      .then(() => {
        console.log("Deleted Sucessfully")
    })
    .catch((error) => {
      console.log("Error => ",error)
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

// add product in firebase
addProduct = () => {

  this
    .db
    .collection('Product')
    .add({
      img : '',
      price : 900,
      qty : 3,
      title : 'Washing Machine'
    })
    .then((docRef) => {
      console.log("Product has been added : ",docRef)
    })
    .catch((error) => {
      console.log("Error :: ",error);
    })
}

  render(){
    const {products,loading} = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()}/>
        {/* <button onClick={this.addProduct} style={{padding:20, fontSize:20}}> Add a Product</button> */}
        <Cart 
          products = {products}
          onIncreaseQuantity={this.handleIncreasedQuantity}
          onDecreaseQuantity = {this.handleDecreasedQuantity}
          onHandleDelete = {this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products ... </h1>}
        <div style={{padding:20,fontSize:20}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
  
}


export default App;
