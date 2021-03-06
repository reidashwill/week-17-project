import React from "react";
import PropTypes from "prop-types";


function ReusableForm(props) { 
  return (
    <>
      <form className='flex-item' onSubmit={props.formSubmissionHandler}>
        <input className='form'
          type='text'
          name='name'
          placeholder='Product Name' />
          <br/>
        <input className='form'
          type='text'
          name='brand'
          placeholder='Brand' />
          <br/>
        <input className='form'
          type='number'
          name='price'
          placeholder='Price' />
          <br/>
        <input className='form'
          type='number'
          name='quantity'
          placeholder='Quantity of Pints' />
        <br/>
        <p>(half barrel keg is typically 124 pints and a quarter barrel is typically 60)</p>
        <button className='flex-item'type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;