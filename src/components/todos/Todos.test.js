import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import Todos from "./Todos";

afterEach(cleanup);

describe("initial page load renders correctly", () => {
  it("should load initial values from context", () => {
    const props = {
      context: { todos: [{ name: "feed cats", isCompleted: false }] }
    };
    const { container, getByText } = render(<Todos {...props} />);
    expect(getByText(/feed/, container)).toBeInTheDocument();
  });
});
