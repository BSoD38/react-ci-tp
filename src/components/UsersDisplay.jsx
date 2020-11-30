import React from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import User from "../models/User";

const UsersDisplay = ({ users, address }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography variant="h6">{`Server ${address}`}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <List style={{ width: "100%" }}>
        {users.map((user) => (
          <React.Fragment key={user.account.id}>
            <ListItem>
              <ListItemText
                primary={user.account.username}
                secondary={user.currentStatus}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </AccordionDetails>
  </Accordion>
);

UsersDisplay.propTypes = {
  users: PropTypes.arrayOf(PropTypes.instanceOf(User)).isRequired,
  address: PropTypes.string.isRequired,
};

export default UsersDisplay;
