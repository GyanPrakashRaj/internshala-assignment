import reducer, { initialState, setFilterOption } from '../filter';

describe('reducer', () => {
  it('should return state for unknown action', () => {
    const mockState = { test: 'testItem' };
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  });

  it('should set filter option on SET_FILTER_OPTION', () => {
    const state = { selectedOption: 'all' };
    const mockAction = setFilterOption('incomplete');
    const result = reducer(state, mockAction);
    expect(result.selectedOption).toEqual('incomplete');
  });
});
