import React from 'react';
import { shallow } from 'enzyme';
import RunningTotalProvider from "./running-total-provider";
import RunningTotalConnector from './running-total-connector';
import { Provider } from 'react-redux';

describe("RunningTotalProvider", () => {
    let provider;

    beforeEach(() => {
        provider = shallow(<RunningTotalProvider/>);
    });
    test("should render redux provider", () => {
        const reduxProvider = provider.find(Provider);

        expect(reduxProvider.length).toEqual(1);
    });

    test("should render connector", () => {
        const connector = provider.find(RunningTotalConnector);
        expect(connector.length).toEqual(1);
    });
});