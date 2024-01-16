// configureStore.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
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

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(productSaga);
sagaMiddleware.run(checkoutSaga);

export default store;


// import { createStore } from 'redux';
// import rootReducer from './reducers';

// const store = createStore(rootReducer);

// export default store;