import React from "react";
import RunningTotal from "./running-total";
import { render } from "@testing-library/react";

describe("Running Total", () => {
    let runningTotal;

    beforeEach(() => {
       runningTotal = render(<RunningTotal/>);
    });

    test("should render component", () => {
        const { getByTestId } = runningTotal;
        expect(getByTestId('header')).toBeDefined();
    });

    test("should render an input box", () => {
        const { getByTestId } = runningTotal;
        expect(getByTestId('input')).toBeDefined();
    });

    test("should render a total amount so far", () => {
        const { getByTestId } = runningTotal;
        expect(getByTestId('total')).toBeDefined();
    });

    test("should render a list of previous inputs", () => {
        const { getByTestId } = runningTotal;
        expect(getByTestId('previousInputs')).toBeDefined();
    });
});