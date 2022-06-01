
import { useState } from 'react';
import './App.css';



      function App()
      {
        return (
          <div className='App'>
          <Counter></Counter>
            
          </div>
        )
      }

      function Counter() {
        const [count, setCount] = useState(2);
        const increaseCount = () => setCount(count+1);
        const decreaseCount = () => setCount(count-1);

        
        // const increaseCount = () => {
        //   const newCount = count + 1;
        //   setCount(newCount);
        // }
        return (<div>
          <h1>Count:{count} </h1>
          <button onClick={increaseCount}>Increase</button>
          <button onClick={decreaseCount}>Decrease</button>

        </div>
        )
      }

     export default App;

// function App() {
//   const products = [
//     {name: 'laptop', price: 1500},
//     {name: 'phone', price: 1200},
//     {name: 'camera', price: 1200},
//     {name: 'watch', price: 120}
//   ]
//   return (
//     <div className="App">
//       {
//         products.map(product => <Product name = {product.name} price = {product.price}></Product>)
//       }
//       <Product name="laptop"  price="1200 euro"></Product>
//       <Product></Product>
      
//     </div>
//   );
// }



// function Product (props) {
//   return (
//     <div className='product-details'>
//       <h3>Name: {props.name}</h3>
//     <p>Price: {props.price} </p>
//     </div>
//   )
// }
// export default App;
