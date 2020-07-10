import React from "react";
import PropTypes from "prop-types";
import { Card } from 'antd';

function Product(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenProductClicked(props.id)}>
        <Card title={props.name}>
        <h4>Made by: {props.brand}</h4>
        <h4>Stock Remaining: {props.quantity}</h4>
        </Card>
      </div>  
    </React.Fragment>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenProductClicked: PropTypes.func
};

export default Product;