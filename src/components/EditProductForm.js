import React from 'react';
import ReusableForm from './ReusableForm'
import PropTypes from 'prop-types'

function EditProductForm (props) {
  const {product} = props
  function handleEditProductFormSubmission(event) {
    event.preventDefault();
    props.onEditProduct({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, quantity: event.target.quantity.value, id: product.id });
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
  onEditProduct: PropTypes.func,
  product: PropTypes.object,
}
export default EditProductForm;