export default (state = null, action) => {
  const {product} = action;
  switch (action.type) {
    case "SELECT_PRODUCT":
      return product
  }
    return state
}