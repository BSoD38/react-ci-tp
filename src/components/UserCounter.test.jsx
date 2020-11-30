/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import React from "react";
import User from "../models/User";
import UserCounter from "./UserCounter";

const dummyUsers = [];
const dummyServer = "dummy";

it("should render", () => {
  render(<UserCounter users={dummyUsers} address={dummyServer} />);
});

it("should display the server's address", () => {
  const testServer = "http://www.test.com";
  render(<UserCounter users={dummyUsers} address={testServer} />);
  const title = screen.getByText(`${testServer}`);
  expect(title).toBeInTheDocument();
});

it("should count the number of users and adapt to grammar (empty)", () => {
  render(<UserCounter users={dummyUsers} address={dummyServer} />);
  const count = screen.getByText("0");
  const grammar = screen.getByText("Users");
  expect(count).toBeInTheDocument();
  expect(grammar).toBeInTheDocument();
});

it("should count the number of users and adapt to grammar (singular)", () => {
  const testUsers = [new User({})];
  render(<UserCounter users={testUsers} address={dummyServer} />);
  const count = screen.getByText("1");
  const grammar = screen.getByText("User");
  expect(count).toBeInTheDocument();
  expect(grammar).toBeInTheDocument();
});

it("should count the number of users and adapt to grammar (plural)", () => {
  const testUsers = [new User({}), new User({}), new User({})];
  render(<UserCounter users={testUsers} address={dummyServer} />);
  const count = screen.getByText("3");
  const grammar = screen.getByText("Users");
  expect(count).toBeInTheDocument();
  expect(grammar).toBeInTheDocument();
});
