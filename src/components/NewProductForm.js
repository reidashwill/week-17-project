import React from 'react'
import { v4 } from 'uuid';
import PropTypes from'prop-types';
import ReusableForm from "./ReusableForm";

function NewProductForm(props){
  return(
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewProductFormSubmission}
      buttonText={"Tap This Keg!"}/>
    </React.Fragment>
  );

  function handleNewProductFormSubmission(event){
    event.preventDefault();
    props.onNewProductCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, quantity: event.target.quantity.value, id: v4()})
  }
}  

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
}
export default NewProductForm;