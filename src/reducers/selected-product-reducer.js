import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const {product} = action;
  switch (action.type) {
    case c.SELECT_PRODUCT:
      return product
  }
    return state
}