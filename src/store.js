import { createStore } from 'redux';
import reducer from './reducers';

const environment = process.env.REACT_APP_URL_ENVIRONMENT;
let store;

if (environment === 'dev') {
  store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
} else {
  store = createStore(reducer);
}

export default store;
