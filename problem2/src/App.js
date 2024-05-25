import React from 'react';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <ProductList />
      <hr />
      <ProductDetail />
    </div>
  );
}

export default App;
