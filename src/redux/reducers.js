
const initialState = {
  data: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CELL':
      return {
        ...state,
        data: state.data.map(row =>
          row.id === action.payload.id
            ? { ...row, [action.payload.column]: action.payload.value }
            : row
        ),
      };
    case 'SET_INITIAL_DATA':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};


export default reducers;
