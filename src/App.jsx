import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import UserIcon from "@material-ui/icons/People";
import ChatroomsIcon from "@material-ui/icons/Chat";
import Users from "./pages/Users";
import Chatrooms from "./pages/Chatrooms";

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <Router>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap>
            Chat server monitor
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="temporary" open={drawerOpen}>
        <div>
          <IconButton onClick={() => setDrawerOpen(!drawerOpen)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to="/" onClick={() => setDrawerOpen(false)}>
            <ListItem button>
              <ListItemIcon>
                <ChatroomsIcon />
              </ListItemIcon>
              <ListItemText primary="Chatrooms" />
            </ListItem>
          </Link>
          <Link to="/users" onClick={() => setDrawerOpen(false)}>
            <ListItem button>
              <ListItemIcon>
                <UserIcon />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
          </Link>
        </List>
      </Drawer>

      <Container>
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Chatrooms />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
