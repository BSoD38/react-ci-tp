/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import Chatrooms from "./Chatrooms";

it("should render", () => {
  render(<Chatrooms />);
  const title = screen.getByText("Number of chatrooms");
  expect(title).toBeInTheDocument();
});
