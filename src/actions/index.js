export const deleteProduct = id => ({
  type: 'DELETE_PRODUCT',
  id
});

export const addProduct = (product) => {
  const { name, brand, price, quantity, id } = product;
  return {
    type: 'ADD_PRODUCT',
    name: name,
    brand: brand,
    price: price,
    quantity: quantity,
    id: id
  }
}

export const selectProduct = (product) => ({
  type: 'SELECT_PRODUCT',
  product
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
})

export const toggleEdit = () => ({
  type: 'TOGGLE_EDIT'
})