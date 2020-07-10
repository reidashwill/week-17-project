import selectedProductReducer from '../../reducers/selected-product-reducer';

describe("selectedProductReducer", () => {

  it('Should return default state if no action type is recognized', () => {
    expect(selectedProductReducer(null, { type: null })).toEqual(null);
  });

  it('Should toggle form visibility state to true', () => {
    expect(selectedProductReducer(null, { type: 'SELECT_PRODUCT', product:"this" })).toEqual("this");
  });
});