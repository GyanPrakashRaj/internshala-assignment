export const SET_FILTER_OPTION = 'qgo/assessment/SET_FILTER_OPTION';

export const setFilterOption = (selectedOption) => {
  return { type: SET_FILTER_OPTION, selectedOption };
};

export const initialState = {
  selectedOption: 'all',
};

const filterReducer = (state = initialState, action) => {
  const { type, selectedOption } = action;
  switch (type) {
    case SET_FILTER_OPTION:
      return {
        ...state,
        selectedOption,
      };
    default:
      return state;
  }
};

export default filterReducer;
