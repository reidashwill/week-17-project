import * as actions from './../../actions';
import { waitForElementToBeRemoved } from '@testing-library/react';

describe('tap room actions', () => {
  it('deleteProduct should create DELETE_PRODUCT action', () => {
    expect(actions.deleteProduct(1)).toEqual({
      type: 'DELETE_PRODUCT',
      id: 1
    });
  });

  it('addProduct should create ADD_PRODUCT action', () => {
    expect(actions.addProduct({name: "beer", brand: "beer company", price: "5", quantity: "124", id: 1})).toEqual({
      type: 'ADD_PRODUCT',
      name: "beer",
      brand: "beer company",
      price: "5",
      quantity: "124",
      id: 1
    });
  });

  it('selectProduct should create SELECT_PRODUCT action', () => {
    expect(actions.selectProduct()).toEqual({
      type: 'SELECT_PRODUCT'
    })
  })

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    })
  })

  it('toggleEdit should create TOGGLE_EDIT action', () => {
    expect(actions.toggleEdit()).toEqual({
      type: 'TOGGLE_EDIT'
    })
  })
});