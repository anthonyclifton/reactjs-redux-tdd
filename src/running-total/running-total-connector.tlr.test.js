import React from 'react';
import { render } from "./test-utils";
import RunningTotalConnector from './running-total-connector';

describe("Running Total Connector", () => {
    let runningTotalConnector;

    beforeEach(() => {
        runningTotalConnector = render(<RunningTotalConnector/>);
    });

    test("should render the connector", () => {
        expect(runningTotalConnector).toBeDefined();
    });
});