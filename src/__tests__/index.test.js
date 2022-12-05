import React from "react";
import { render } from "@testing-library/react";

import App from "../App";
import { internalIP } from "webpack-dev-server";

describe("App function component", () => {

    it("renders without errors", () => {
        render(<App />);
    })
})