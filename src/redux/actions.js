
export const updateCell = (id, column, value) => ({
  type: 'UPDATE_CELL',
  payload: { id, column, value },
});

export const setInitialData = (data) => ({
  type: 'SET_INITIAL_DATA',
  payload: data,
});
