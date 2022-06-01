
import './App.css';

function App() {
  const products = [
    {name: 'laptop', price: 1500},
    {name: 'phone', price: 1200},
    {name: 'camera', price: 1200},
    {name: 'watch', price: 120}
  ]
  return (
    <div className="App">
      {
        products.map(product => <Product name = {product.name} price = {product.price}></Product>)
      }
      <Product name="laptop"  price="1200 euro"></Product>
      <Product></Product>
      
    </div>
  );
}



function Product (props) {
  return (
    <div className='product-details'>
      <h3>Name: {props.name}</h3>
    <p>Price: {props.price} </p>
    </div>
  )
}
export default App;
