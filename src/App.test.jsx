/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

it("should render", () => {
  render(<App />);
  const title = screen.getByText(/Chat server monitor/i);
  expect(title).toBeInTheDocument();
});
