import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import Login from "./Login";
import { LoginContext } from "../contexts/loginContext";

afterEach(cleanup);

describe("Login", () => {
  it("Login component displays you are logged in if user has already logged in", () => {
    const { container, getByText } = render(
      <LoginContext.Provider value={{ username: "harry", password: "potter" }}>
        <Login />
      </LoginContext.Provider>
    );
    expect(getByText(/you are logged in/i, container)).toBeInTheDocument();
  });

  it("Login component displays username and password input fields if no user logged in", () => {
    const { container, getByText } = render(
      <LoginContext.Provider value={{ username: "", password: "" }}>
        <Login />
      </LoginContext.Provider>
    );
    expect(getByText(/Username:/i, container)).toBeInTheDocument();
  });
});
