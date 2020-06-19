const initialState = {
  modal: false,
  places: [],
  home: {
    lat: 4.75374,
    lng: -74.09174,
  },
  app: process.env.REACT_APP_URL_NAME_APP,
  langEN: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_DATA_USER':
      return {
        ...state,
        ...action.payload,
      };
    case 'REMOVE_DATA_USER':
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
