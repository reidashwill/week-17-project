import React from 'react'
import ProductList from './ProductList'
import NewProductForm from './NewProductForm'
import ProductDetail from './ProductDetail'
import EditProductForm from './EditProductForm'
import { connect } from 'react-redux';
import PropTypes from "prop-types";


class ProductControl extends React.Component{

  // constructor(props){
  //   super(props);
  //   this.state = {
  //   }
  // }

  handleClick = () => {
    if(this.props.editing){
      const {dispatch} = this.props;
      const action = {
        type: 'TOGGLE_EDIT'
      }
      dispatch(action)
      const action2 = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action2)
    }else if(this.props.selectedProduct != null){
      const {dispatch} = this.props;
      const action = {
        type: 'SELECT_PRODUCT',
        product: null
      }
      dispatch(action)
    }else{
      const {dispatch} = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action)
    }
    
  }

  handleDeletingProduct = (id) => {
    const {dispatch} = this.props;
    const action = {
      type: "DELETE_PRODUCT",
      id: id
    }
    dispatch(action)
    const action2 = {
      type: 'SELECT_PRODUCT',
      product: null
    }
    dispatch(action2)
  } 

  handleEditClick = () => {
    const {dispatch} = this.props;
      const action = {
        type: 'TOGGLE_EDIT'
      }
      dispatch(action)
  }

  handleEditingProduct = (productToEdit) => {
    const {dispatch} = this.props;
    const {id, name, brand, price, quantity} = productToEdit;
    const action = {
      type: 'ADD_PRODUCT',
      id: id,
      name: name,
      brand: brand,
      price: price,
      quantity: quantity,
      
    }
    dispatch(action);
    const action2 = {
      type: 'SELECT_PRODUCT',
      product: null
    }
    dispatch(action2)
    const action3 = {
      type: 'TOGGLE_EDIT'
    }
    dispatch(action3)
  }

  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.props.productList[id];
    const {dispatch} = this.props;
    const action = {
      type: 'SELECT_PRODUCT', 
      product: selectedProduct
    }
    dispatch(action)
  }

  handleAddingNewProductToList = (newProduct) => {
    const {dispatch} = this.props;
    const {name, brand, price, quantity, id} = newProduct;
    const action = {
      type: 'ADD_PRODUCT',
      name: name,
      brand: brand,
      price: price,
      quantity: quantity,
      id: id
    }
    dispatch(action);
    const toggle = {type: 'TOGGLE_FORM'}
    dispatch(toggle);
    
  }
  
  handleDecrementingQuantity = (productToEdit) => {
    const {dispatch} = this.props;
    const {name, brand, price, quantity, id} = productToEdit;
    const action = {
      type: 'ADD_PRODUCT',
      name: name,
      brand: brand,
      price: price,
      quantity: (quantity -1),
      id: id
    }
    dispatch(action);
    const action2 = {
      type: 'SELECT_PRODUCT',
      product: null
    }
    dispatch(action2)
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null
    if(this.props.editing){
      currentlyVisibleState = <EditProductForm product = {this.props.selectedProduct} onEditProduct = {this.handleEditingProduct}/>
      buttonText="See all of our beers!"
    }else if(this.props.selectedProduct){
      currentlyVisibleState = <ProductDetail product = {this.props.selectedProduct} onSellingPint={this.handleDecrementingQuantity} onClickingEdit = {this.handleEditClick} onClickingDelete = {this.handleDeletingProduct}/>
      buttonText = "See all of our beers!"
    }else if(this.props.formVisibleOnPage){
      currentlyVisibleState = <NewProductForm onNewProductCreation={this.handleAddingNewProductToList}/>
      buttonText = "See all of our beers!"
    }else{
      currentlyVisibleState = <ProductList productList={this.props.productList} onProductSelection={this.handleChangingSelectedProduct}/>
      buttonText = "Add a Keg!"
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }

}

ProductControl.propTypes = {
  productList: PropTypes.object,
}

const mapStateToProps = state => {
  return{
    productList: state.productList,
    formVisibleOnPage: state.formVisibleOnPage,
    editing: state.editing,
    selectedProduct: state.selectedProduct
  }
}

ProductControl = connect(mapStateToProps)(ProductControl);

export default ProductControl