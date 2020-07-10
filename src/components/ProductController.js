import React from 'react'
import ProductList from './ProductList'
import NewProductForm from './NewProductForm'
import ProductDetail from './ProductDetail'
import EditProductForm from './EditProductForm'
import { connect } from 'react-redux';
import PropTypes from "prop-types";


class ProductControl extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      selectedProduct: null,
    }
  }

  handleClick = () => {
    if(this.state.selectedProduct){
      this.setState({
        editing: false,
        selectedProduct: null
      });
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
    this.setState({
      selectedProduct: null
    })
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
    const {name, price, quantity, id} = productToEdit;
    const action = {
      type: 'ADD_PRODUCT',
      name: name,
      price: price,
      quantity: quantity,
      id: id
    }
    dispatch(action);
    this.setState({ 
      editing: false,
      selectedProduct: null
    })
  }

  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.props.productList[id];
    this.setState({selectedProduct: selectedProduct})
  }

  handleAddingNewProductToList = (newProduct) => {
    const {dispatch} = this.props;
    const {name, price, quantity, id} = newProduct;
    const action = {
      type: 'ADD_PRODUCT',
      name: name,
      price: price,
      quantity: quantity,
      id: id
    }
    dispatch(action);
    const toggle = {type: 'TOGGLE_FORM'}
    dispatch(toggle);
    
  }
  
  // handleDecrementingQuantity = (productToEdit) => {
  //   const {dispatch} = this.props;
  //   const {name, price, quantity, id} = productToEdit;
  //   const action = {
  //     type: 'ADD_PRODUCT',
  //     name: name,
  //     price: price,
  //     quantity: quantity--,
  //     id: id
  //   }
  //   dispatch(action);
  //   this.setState({ 
  //     editing: false,
  //     selectedProduct: null
  //   })
  // }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null
    if(this.props.editing){
      currentlyVisibleState = <EditProductForm product = {this.state.selectedProduct} onEditProduct = {this.handleEditingProduct}/>
      buttonText="See all of our beers!"
    }else if(this.state.selectedProduct){
      currentlyVisibleState = <ProductDetail product = {this.state.selectedProduct} onSellingPint={this.handleDecrementingQuantity} onClickingEdit = {this.handleEditClick} onClickingDelete = {this.handleDeletingProduct}/>
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
  productList: PropTypes.object
}

const mapStateToProps = state => {
  return{
    productList: state.productList,
    formVisibleOnPage: state.formVisibleOnPage,
    editing: state.editing
  }
}

ProductControl = connect(mapStateToProps)(ProductControl);

export default ProductControl