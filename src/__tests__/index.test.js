import React from "react";
import { render } from "@testing-library/react";

import App from "../app/App";

describe("App function component", () => {

    it("renders without errors", () => {
        render(<App />);
    })
})