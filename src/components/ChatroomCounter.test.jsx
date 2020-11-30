/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import React from "react";
import ChatroomCounter from "./ChatroomCounter";

const dummyChatrooms = [];
const dummyServer = "dummy";

it("should render", () => {
  render(<ChatroomCounter chatrooms={dummyChatrooms} address={dummyServer} />);
});

it("should display the server's address", () => {
  const testServer = "http://www.test.com";
  render(<ChatroomCounter chatrooms={dummyChatrooms} address={testServer} />);
  const title = screen.getByText(`${testServer}`);
  expect(title).toBeInTheDocument();
});

it("should count the number of chatrooms and adapt to grammar (empty)", () => {
  render(<ChatroomCounter chatrooms={dummyChatrooms} address={dummyServer} />);
  const count = screen.getByText("0");
  const grammar = screen.getByText("Chatrooms");
  expect(count).toBeInTheDocument();
  expect(grammar).toBeInTheDocument();
});

it("should count the number of chatrooms and adapt to grammar (singuar)", () => {
  const testChatrooms = ["Test 1"];
  render(<ChatroomCounter chatrooms={testChatrooms} address={dummyServer} />);
  const count = screen.getByText("1");
  const grammar = screen.getByText("Chatroom");
  expect(count).toBeInTheDocument();
  expect(grammar).toBeInTheDocument();
});

it("should count the number of chatrooms and adapt to grammar (plural)", () => {
  const testChatrooms = ["Test 1", "Test 2", "Test 3"];
  render(<ChatroomCounter chatrooms={testChatrooms} address={dummyServer} />);
  const count = screen.getByText("3");
  const grammar = screen.getByText("Chatrooms");
  expect(count).toBeInTheDocument();
  expect(grammar).toBeInTheDocument();
});
