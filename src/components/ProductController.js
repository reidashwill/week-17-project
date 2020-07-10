import React from 'react'
import ProductList from './ProductList'
import NewProductForm from './NewProductForm'
import ProductDetail from './ProductDetail'
import EditProductForm from './EditProductForm'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';


class ProductControl extends React.Component{

  // constructor(props){
  //   super(props);
  //   this.state = {
  //   }
  // }

  handleClick = () => {
    if(this.props.editing){
      const {dispatch} = this.props;
      const action = a.toggleEdit()
      dispatch(action)
      const action2 = a.toggleForm()
      dispatch(action2)
    }else if(this.props.selectedProduct != null){
      const {dispatch} = this.props;
      const action = a.selectProduct(null)
      dispatch(action)
    }else{
      const {dispatch} = this.props;
      const action = a.toggleForm()
      dispatch(action)
    }
  }

  handleDeletingProduct = (id) => {
    const {dispatch} = this.props;
    const action = a.deleteProduct(id)
    dispatch(action)
    const action2 = a.selectProduct(null)
    dispatch(action2)
  } 

  handleEditClick = () => {
    const {dispatch} = this.props;
    const action = a.toggleEdit()
    dispatch(action)
  }

  handleEditingProduct = (productToEdit) => {
    const {dispatch} = this.props;
    const {id, name, brand, price, quantity} = productToEdit;
    const action = a.addProduct({
      name: name,
      brand: brand,
      price: price,
      quantity: quantity,
      id: id
    })
    dispatch(action)
    const action2 = a.selectProduct(null)
    dispatch(action2)
    const action3 = a.toggleEdit()
    dispatch(action3)
  }

  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.props.productList[id];
    const {dispatch} = this.props;
    const action = a.selectProduct(selectedProduct)
    dispatch(action)
  }

  handleAddingNewProductToList = (newProduct) => {
    const {dispatch} = this.props;
    const {name, brand, price, quantity, id} = newProduct;
    const action = a.addProduct({
      name: name,
      brand: brand,
      price: price,
      quantity: quantity,
      id: id
    })
    dispatch(action);
    const action2 = a.toggleForm()
    dispatch(action2)
    
  }
  
  handleDecrementingQuantity = (productToEdit) => {
    const {dispatch} = this.props;
    const {name, brand, price, quantity, id} = productToEdit;
    const action = a.addProduct({
      name: name,
      brand: brand,
      price: price,
      quantity: (quantity - 1),
      id: id
    })
    dispatch(action);
    const action2 = a.selectProduct(null)
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
  selectedProduct: PropTypes.object,
  editing: PropTypes.bool,
  formVisibleOnPage: PropTypes.bool
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