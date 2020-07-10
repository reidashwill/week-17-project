export default (state = {}, action) => {
  const { name, price, quantity, id } = action;
  switch(action.type){
    case 'ADD_PRODUCT':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          price: price,
          quantity: quantity,
          id: id
        }
      });
    case 'DELETE_PRODUCT':
      const stateCopy = { ...state };
      delete stateCopy[id];
      return stateCopy
    default:
      return state;
  }  
};