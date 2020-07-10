import React from 'react'
import ProductList from './ProductList'
import NewProductForm from './NewProductForm'
import ProductDetail from './ProductDetail'
import EditProductForm from './EditProductForm'


class ProductControl extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterProductList: [],
      selectedProduct: null,
      editing: false
    }
  }

  handleClick = () => {
    if(this.state.selectedProduct){
      this.setState({
        editing: false,
        formVisibleOnPage: false,
        selectedProduct: null
      });
    }else{
      this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleDeletingProduct = (id) => {
    const newMasterProductList = this.state.masterProductList.filter(product => product.id !== id);
    this.setState({
      masterProductList: newMasterProductList,
      selectedProduct: null
    })
  } 

  handleEditClick = () => {
    this.setState({editing: true})
  }

  handleEditingProduct = (productToEdit) => {
    const editedProductList = this.state.masterProductList.filter(product => product.id !== this.state.selectedProduct.id).concat(productToEdit);
    this.setState({
      masterProductList: editedProductList,
      editing: false,
      selectedProduct: null
    })
  }

  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.state.masterProductList.filter(product => product.id === id)[0];
    this.setState({selectedProduct: selectedProduct})
  }

  handleAddingNewProductToList = (newProduct) => {
    const newMasterProductList = this.state.masterProductList.concat(newProduct);
    this.setState({masterProductList: newMasterProductList, formVisibleOnPage: false})
  }
  
  handleDecrementingQuantity = (productToEdit) => {
    productToEdit.quantity --
    const editedMasterProductList = this.state.masterProductList.filter(product => product.id !== this.state.selectedProduct.id).concat(productToEdit);
    this.setState({
      masterProductList: editedMasterProductList,
      selectedProduct: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null
    if(this.state.editing){
      currentlyVisibleState = <EditProductForm product = {this.state.selectedProduct} onEditProduct = {this.handleEditingProduct}/>
      buttonText="See all of our beers!"
    }else if(this.state.selectedProduct){
      currentlyVisibleState = <ProductDetail product = {this.state.selectedProduct} onSellingPint={this.handleDecrementingQuantity} onClickingEdit = {this.handleEditClick} onClickingDelete = {this.handleDeletingProduct}/>
      buttonText = "See all of our beers!"
    }else if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewProductForm onNewProductCreation={this.handleAddingNewProductToList}/>
      buttonText = "See all of our beers!"
    }else{
      currentlyVisibleState = <ProductList productList={this.state.masterProductList} onProductSelection={this.handleChangingSelectedProduct}/>
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
export default ProductControl