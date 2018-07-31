import { createStore, applyMiddleware } from 'redux';
import reducer from 'reducer';
import middleware from './middleware';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const Store = createStore(reducer, composeWithDevTools(applyMiddleware(middleware, ReduxThunk)));

export default Store;