import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brand, price, quantity, id } = action;
  switch(action.type){
    case c.ADD_PRODUCT:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          quantity: quantity,
          id: id
        }
      });
    case c.DELETE_PRODUCT:
      const stateCopy = { ...state };
      delete stateCopy[id];
      return stateCopy
    default:
      return state;
  }  
};