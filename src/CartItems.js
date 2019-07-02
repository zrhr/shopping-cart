import React from 'react';
import CartItem from "../src/CartItem.js"
function CartItems({cartItemsList}){

let productList =cartItemsList.map((product,i) =>
  <CartItem key = {product.id} product={product}/>)

return <div className="container">
  <h1>Cart Items</h1>
  <div className="list-group">
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-8">Product</div>
        <div className="col-md-2">Price</div>
        <div className="col-md-2">Quantity</div>
      </div>
    </div>
    {productList}
  </div>
</div>

}
export default CartItems;
