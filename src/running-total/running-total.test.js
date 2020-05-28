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
});