import React from "react";
import App from "./App";
import { fireEvent, render, wait } from "@testing-library/react";

const properties = {};

describe("App", () => {
    let app;

    beforeEach(() => {
       app = render(<App {...properties} />);
    });

    test("should render the page", () => {
        const { getByTestId } = app;

        expect(getByTestId('something')).toBeDefined();
    });
});