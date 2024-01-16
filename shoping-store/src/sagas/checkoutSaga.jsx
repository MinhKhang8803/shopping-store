// checkoutSaga.js
import { put, takeLatest, call } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as checkoutActions from '../actions/checkoutActions';
import api from '../services/api';

function* handleCheckout(action) {
    try {
        yield call(api.checkout, action.payload);
        yield put(checkoutActions.checkoutSuccess());
    } catch (error) {
        // Handle error
    }
}

function* watchCheckout() {
    yield takeLatest(actionTypes.CHECKOUT_REQUEST, handleCheckout);
}

export default function* checkoutSaga() {
    yield watchCheckout();
    // Add more sagas as needed
}
