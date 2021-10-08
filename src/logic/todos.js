export const ADD_ITEM = 'qgo/assessment/ADD_ITEM';
export const REMOVE_ITEM = 'qgo/assessment/REMOVE_ITEM';
export const TOGGLE_ITEM = 'qgo/assessment/TOGGLE_ITEM';

export const addItem = (content) => {
  return { type: ADD_ITEM, content };
};

export const removeItem = (id) => {
  return { type: REMOVE_ITEM, id };
};

export const toggleItem = (id) => {
  return { type: TOGGLE_ITEM, id };
};

export const initialState = {
  items: [
    { id: 1, complete: false, content: 'Call mum' },
    { id: 2, complete: false, content: 'Buy cat food' },
    { id: 3, complete: false, content: 'Water the plants' },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const nextId =
        state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;
      const newItem = {
        id: nextId,
        content: action.content,
        complete: false,
      };

      return {
        ...state,
        items: [...state.items, newItem],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== action.id)
      };
    case TOGGLE_ITEM:
      return {
        ...state,
        items: state.items.map((item) => {
          if(item.id === action.id) {
            return {...item, complete: !item.complete}
          }
          return item;
        })
      };
    default:
      return state;
  }
};

export default todoReducer;
