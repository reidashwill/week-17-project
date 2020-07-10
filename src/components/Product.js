import React from "react";
import PropTypes from "prop-types";

function Product(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenProductClicked(props.id)}>
        <h3>{props.name}</h3>
        <h4>Made by: {props.brand}</h4>
        <hr/>
      </div>  
    </React.Fragment>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
};

export default Product;