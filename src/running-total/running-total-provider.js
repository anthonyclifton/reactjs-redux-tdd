import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import RunningTotalConnector from "./running-total-connector";

export const prepareStore = (state) => {
    return createStore(combineReducers({}), state);
};

const store = prepareStore();

const RunningTotalProvider = () => (
    <Provider store={store}>
        <RunningTotalConnector/>
    </Provider>
);

export default RunningTotalProvider;