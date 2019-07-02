import React from 'react';


class AddItem extends React.Component{
  state = {quantity:1};
 selectList= this.props.products.map((product,i)=>{
  return <option value={product.id} name={product.name}>{product.name}</option>
});
onSubmit = (e)=>{

  e.preventDefault();

  this.props.submit(this.state)
}
onChange=(e)=>this.setState({[e.target.name]:e.target.value})
render(){
return (
  <div className="container">
  <div className="list-group">
    <div className="list-group-item">
<div className="row">
<p>

  <form onSubmit={this.onSubmit}>
  <p>
  <label>
  Quantity:<br></br> <input type="number" placeholder="1" name="quantity" onChange={this.onChange}/>
  </label>
    </p>
<label>
Products
<br></br>
<select onChange={this.onChange} name="product_id">
<option selected >Please select a product</option>
{this.selectList}
</select>

</label>
<br></br>
<input type="submit" value="Add Item"/>
  </form>
  </p>
  </div>
  </div>
  </div>
  </div>
)}}
export default AddItem;
