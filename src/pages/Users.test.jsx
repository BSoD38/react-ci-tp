/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import Users from "./Users";

it("should render", () => {
  render(<Users />);
  const title = screen.getByText("Number of users");
  expect(title).toBeInTheDocument();
});
