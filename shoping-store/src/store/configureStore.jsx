// configureStore.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import productReducer from '../reducers/productReducer';
import cartReducer from '../reducers/cartReducer';
import checkoutReducer from '../reducers/checkoutReducer';
import productSaga from '../sagas/productSaga';
import checkoutSaga from '../sagas/checkoutSaga';

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(productSaga);
sagaMiddleware.run(checkoutSaga);

export default store;
