import React from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ChatroomsDisplay = ({ chatrooms, address }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography variant="h6">{`Server ${address}`}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <List style={{ width: "100%" }}>
        {chatrooms.map((chatroom) => (
          <React.Fragment key={chatroom}>
            <ListItem>{chatroom}</ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </AccordionDetails>
  </Accordion>
);

ChatroomsDisplay.propTypes = {
  chatrooms: PropTypes.arrayOf(PropTypes.string).isRequired,
  address: PropTypes.string.isRequired,
};

export default ChatroomsDisplay;
