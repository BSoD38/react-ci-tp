/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import React from "react";
import Account from "../models/Account";
import User from "../models/User";
import UsersDisplay from "./UsersDisplay";

const dummyUsers = [];
const dummyServer = "dummy";

it("should render", () => {
  render(<UsersDisplay users={dummyUsers} address={dummyServer} />);
});

it("should display the server's address", () => {
  const testServer = "http://www.test.com";
  render(<UsersDisplay users={dummyUsers} address={testServer} />);
  const title = screen.getByText(`Server ${testServer}`);
  expect(title).toBeInTheDocument();
});

it("should display the user's names and statuses", () => {
  const testUsers = [
    new User({
      account: new Account({ username: "hello", id: "1" }),
      currentStatus: "ACTIVE",
    }),
    new User({
      account: new Account({ username: "test", id: "2" }),
      currentStatus: "INACTIVE",
    }),
  ];
  render(<UsersDisplay users={testUsers} address={dummyServer} />);
  const name1 = screen.getByText("hello");
  const name2 = screen.getByText("test");
  const status1 = screen.getByText("ACTIVE");
  const status2 = screen.getByText("INACTIVE");
  expect(name1).toBeInTheDocument();
  expect(name2).toBeInTheDocument();
  expect(status1).toBeInTheDocument();
  expect(status2).toBeInTheDocument();
});
