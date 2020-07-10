import React from 'react';
import ReusableForm from './ReusableForm'
import PropTypes from 'prop-types'
import { v4 } from 'uuid';

function EditProductForm (props) {
  const {product} = props
  function handleEditProductFormSubmission(event) {
    event.preventDefault();
    props.onEditProduct({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, quantity: event.target.quantity.value, id: product.id });
  }

  return (
    <>
      <ReusableForm
      formSubmissionHandler={handleEditProductFormSubmission}
      buttonText="Update Keg Info" />
    </>
  );
}

EditProductForm.propTypes = {
  onEditProduct: PropTypes.func
}
export default EditProductForm;