import React from 'react';
function TotalPrice ({cartItemsList}){
  console.log(cartItemsList)
  let priceArray=cartItemsList.map((product)=>product.product.priceInCents*product.quantity);
  let productSum =priceArray.reduce((acc,cur) => acc+cur,0);
return(
    <div className="container">
    <div className="list-group">
      <div className="list-group-item">
  <div className="row">
  <div className="col-md-10">

  <p>Total Price:  {productSum/100}
  </p>
</div>
  </div>
</div>
</div>
</div>
  )
}
export default TotalPrice;
