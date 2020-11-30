/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import React from "react";
import ChatroomsDisplay from "./ChatroomsDisplay";

const dummyChatrooms = [];
const dummyServer = "dummy";

it("should render", () => {
  render(<ChatroomsDisplay chatrooms={dummyChatrooms} address={dummyServer} />);
});

it("should display the server's address", () => {
  const testServer = "http://www.test.com";
  render(<ChatroomsDisplay chatrooms={dummyChatrooms} address={testServer} />);
  const title = screen.getByText(`Server ${testServer}`);
  expect(title).toBeInTheDocument();
});

it("should display the chatrooms' names", () => {
  const testChatrooms = ["hello", "test"];
  render(<ChatroomsDisplay chatrooms={testChatrooms} address={dummyServer} />);
  const chatroom1 = screen.getByText("hello");
  const chatroom2 = screen.getByText("test");
  expect(chatroom1).toBeInTheDocument();
  expect(chatroom2).toBeInTheDocument();
});
