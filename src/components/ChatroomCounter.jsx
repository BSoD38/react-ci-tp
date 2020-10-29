import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const ChatroomCounter = ({ chatrooms, address }) => (
  <Card>
    <CardContent>
      <Typography variant="h6">{address}</Typography>
      <Typography variant="h2" align="center">
        {chatrooms.length}
      </Typography>
      <Typography variant="h6" align="center">
        {chatrooms.length === 1 ? "Chatroom" : "Chatrooms"}
      </Typography>
    </CardContent>
  </Card>
);

ChatroomCounter.propTypes = {
  chatrooms: PropTypes.arrayOf(PropTypes.string).isRequired,
  address: PropTypes.string.isRequired,
};

export default ChatroomCounter;
