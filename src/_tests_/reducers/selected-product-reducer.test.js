import selectedProductReducer from '../../reducers/selected-product-reducer';

describe("selectedProductReducer", () => {

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

  it('Should return default state if no action type is recognized', () => {
    expect(selectedProductReducer(null, { type: null })).toEqual(null);
  });

  it('Should update the state of selectedProduct', () => {
    expect(selectedProductReducer(null, { type: 'SELECT_PRODUCT', product: currentState[1] })).toEqual(currentState[1]);
  });
});