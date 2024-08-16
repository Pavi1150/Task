
const initialState = {
  data: [
    {
      id: 1,
      deliverable: 'Instagram Post',
      name: 'Campaign A',
      creatorPrice: 0,
      brandPrice: 0,
      approved: 'No',
      goLiveDate: new Date().toISOString(),
      published: 'No',
      publishedDate: new Date().toISOString(),
      postLink: 'https://www.instagram.com/',
    },
    {
      id: 2,
      deliverable: 'YouTube Video',
      name: 'Campaign B',
      creatorPrice: 0,
      brandPrice: 0,
      approved: 'No',
      goLiveDate: new Date().toISOString(),
      published: 'No',
      publishedDate: new Date().toISOString(),
      postLink: 'https://www.youtube.com/',
    },
  ]
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
