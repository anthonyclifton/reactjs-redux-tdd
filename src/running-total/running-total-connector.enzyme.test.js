import React from 'react';
import ReactDOM from 'react-dom';
import RunningTotalConnector, {
    mapDispatchToProps,
    mapStateToProps
} from "./running-total-connector";
import { Provider } from "react-redux";
import {combineReducers, createStore} from "redux";

const prepareStore = (state) => {
    return createStore(combineReducers({}), state);
};

describe("RunningTotalConnector", () => {
    const expectedState = {something: "something"};

    test("should render running total connector", () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <Provider store={prepareStore(expectedState)}>
                <RunningTotalConnector/>
            </Provider>, div
        )
    });

    describe("mapStateToProps", () => {
        test("should update from state", () => {
            expect(mapStateToProps(expectedState).something).toEqual("something");
        });
    });
});