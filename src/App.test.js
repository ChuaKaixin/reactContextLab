import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("initial page load displays default todos", () => {
  const { container, getByText } = render(<App />);
  expect(getByText(/feed/, container)).toBeInTheDocument();

  // The problem is elements that have visibility set to visible are visible,
  // even if their parents have visibility set to hidden.
  // see https://github.com/vuejs/vue-test-utils/issues/327
  // const computedStyle = window.getComputedStyle(todos);
  // expect(computedStyle.getPropertyValue("display")).toEqual("none");
});
