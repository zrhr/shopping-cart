import React from 'react';
import CartHeader from "../src/Header.js"
import CartItems from "../src/CartItems.js"
import AddItem from "../src/AddItem.js"
import CartFooter from "../src/CartFooter.js"
import TotalPrice from "../src/TotalPrice.js"
import './App.css';




class App extends React.Component {
state= {products:[
  { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
  { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
  { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
  { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
  { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
  { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
  { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
  { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
  { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
]};
cartItemsList =[
  { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
  { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
  { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
]
handleClick=(e)=>{
  console.log(e.quantity)
let holder=this.state.products.filter(item=>item.id==e.product_id)[0]
this.cartItemsList.push({id:this.cartItemsList.length,
  product:holder,
  quantity: e.quantity
})
this.forceUpdate();

};
render(){



  return (
<>
  <CartHeader />
  <CartItems cartItemsList={this.cartItemsList}/>
  <TotalPrice cartItemsList={this.cartItemsList}/>
  <AddItem products={this.state.products} submit={this.handleClick}/>
<CartFooter />
</>
  );
}
}
export default App;
