import React from 'react';
import './App.css';
import Header from  './Header'
import ProductController from  './ProductController'

function App() {
  return(
    <React.Fragment>
      <div className="container">
        <Header />
        <ProductController />
      </div>
    </React.Fragment>
  )
}

export default App;
