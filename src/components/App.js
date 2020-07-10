import React from 'react';
import './App.css';
import Header from  './Header'
import ProductController from  './ProductController'
import 'antd/dist/antd.css';

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
