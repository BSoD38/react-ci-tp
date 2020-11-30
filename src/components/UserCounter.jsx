import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import User from "../models/User";

const UserCounter = ({ users, address }) => (
  <Card>
    <CardContent>
      <Typography variant="h6">{address}</Typography>
      <Typography variant="h2" align="center">
        {users.length}
      </Typography>
      <Typography variant="h6" align="center">
        {users.length === 1 ? "User" : "Users"}
      </Typography>
    </CardContent>
  </Card>
);

UserCounter.propTypes = {
  users: PropTypes.arrayOf(PropTypes.instanceOf(User)).isRequired,
  address: PropTypes.string.isRequired,
};

export default UserCounter;
