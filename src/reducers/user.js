const initialState = {
  modal: false,
  darkMode: false,
  places: [],
  home: {
    lat: 4.75374,
    lng: -74.09174,
  },
  app: 'mapita',

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
