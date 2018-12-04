import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import Navbar from "./Navbar";
import { LoginContext } from "../contexts/loginContext";

afterEach(cleanup);

describe("Navbar", () => {
  it("component renders username supplied by context", () => {
    const { container, getByText } = render(
      <LoginContext.Provider value={{ username: "harry", password: "potter" }}>
        <Navbar />
      </LoginContext.Provider>
    );
    expect(getByText(/harry/i, container)).toBeInTheDocument();
  });
});
