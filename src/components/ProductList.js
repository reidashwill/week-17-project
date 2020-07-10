import React from "react";
import PropTypes from 'prop-types';
import Product from  './Product';

function ProductList(props) {
  if(props.productList.length === 0){

    return(
      <React.Fragment>
        <h1 className="header">Our Glorious Beer Selection!</h1>
        <h4 className="header">It appears as though all of the beer is gone!  Please check back soon, or add a keg!</h4>
      </React.Fragment>
    )
  }else{
    return(
      <React.Fragment>
        <h1 className="header">Our Glorious Beer Selection!</h1>
        {props.productList.map((product) =>
        <Product
          whenProductClicked = { props.onProductSelection}
          name={product.name}
          brand={product.brand}
          price={product.price}
          alcoholContent={product.alcoholContent}
          quantity={product.quantity}
          id={product.id}
          key={product.id}/>

        )}
      </React.Fragment>
    )
  }
}

ProductList.propTypes = {
  productList: PropTypes.array,
  onProductSelection: PropTypes.func
};

export default ProductList