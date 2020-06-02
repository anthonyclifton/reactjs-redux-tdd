import React from "react";
import RunningTotalProvider from "./running-total-provider";
import { render } from "@testing-library/react";

describe("Running Total Provider", () => {
    let runningTotalProvider;

    beforeEach(() => {
        runningTotalProvider = render(<RunningTotalProvider/>);
    });

    test("should render the provider", () => {
        expect(runningTotalProvider).toBeDefined();
    });
});