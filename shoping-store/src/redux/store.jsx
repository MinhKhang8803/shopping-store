// configureStore.js
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import productReducer from '../redux/reducers/productReducer';
import cartReducer from '../redux/reducers/cartReducer';
import checkoutReducer from '../redux/reducers/checkoutReducer';
import productSaga from '../sagas/productSaga';
import checkoutSaga from '../sagas/checkoutSaga';

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
});

const sagaMiddleware = createSagaMiddleware();

// Use compose to apply multiple enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(productSaga);
sagaMiddleware.run(checkoutSaga);

export default store;
