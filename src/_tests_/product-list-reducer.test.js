import productListReducer from '../reducers/product-list-reducer';

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
  
  test('Should return default state if no action type is recognized', () => {
    expect(productListReducer({}, { type: null })).toEqual({});
  });

})