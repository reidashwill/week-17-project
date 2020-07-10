import editingReducer from '../../reducers/editingReducer';

describe("editingReducer", () => {

  it('Should return default state if no action type is passed', () => {
    expect(editingReducer(false, {type: null})).toEqual(false)
  });

  it('Should toggle editing state to true', () => {
    expect(editingReducer(false, {type: 'TOGGLE_EDIT'})).toEqual(true);
  })
  
})