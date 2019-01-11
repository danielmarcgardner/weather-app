import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Api from '../utils/api';
import rootReducer from './reducers';

//Redux Boilerplate
const finalCreateStore = compose(
  //Passed in API as extra argument to call it in thunks
  applyMiddleware(thunk.withExtraArgument({ Api })),
  //Added for redux devtools
  process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
)(createStore);

function configureStore(preloadedState) {
  const store = finalCreateStore(rootReducer, preloadedState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}

export default configureStore();
