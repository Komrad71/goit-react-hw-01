// src/App.jsx

// src/App.jsx

import Product from './Product';

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>

      <Product />
      <Product />
      <Product />
    </div>
  );
}



function Product() {
    return (
      <div>
        <h2>Cookies</h2>
      <p>Price: 999 credits</p>
      </div>
    );
  };
  
  export default function App() {
    return (
      <div>
        <h1>Products</h1>
  
        <Product />
        <Product />
        <Product />
      </div>
    );
  }
  