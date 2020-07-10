import productListReducer from '../../reducers/product-list-reducer';

describe('productListReducer', () => {
  let action;

  const currentState = {
    1:{
      name: 'ale',
      price: '3',
      quantity: '10',
      id: 1
    },
    2:{
      name: 'mead',
      price: '5',
      quantity: '19',
      id: 2
    }
  }

  const productData = {
    name: 'ale',
    price: '3',
    quantity: '10',
    id: 1
  }
  
  it('Should return default state if no action type is recognized', () => {
    expect(productListReducer({}, { type: null })).toEqual({});
  });

  it('Should successfully add a product', () => {
    const {name, price, quantity, id} = productData;
    action = {
      type: 'ADD_PRODUCT',
      name: name,
      price: price,
      quantity: quantity,
      id: id
    };
    expect(productListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        price: price,
        quantity: quantity,
        id: id
      }
    })
  })

  it('Should successfully delete a product', () => {
    action = {
      type: 'DELETE_PRODUCT',
      id: 1
    };
    expect(productListReducer(currentState, action)).toEqual({
      2: {
        name: 'mead',
        price: '5',
        quantity: '19',
        id: 2
      }
    });
  });
})