import { makeStyles, Typography, Grid } from "@material-ui/core";
import { useEffect, useState, React } from "react";
import ChatroomCounter from "../components/ChatroomCounter";
import ChatroomsDisplay from "../components/ChatroomsDisplay";
import servers from "../servers";

const useStyle = makeStyles({
  title: {
    marginBottom: "10px",
  },
  spacer: {
    marginTop: "15px",
  },
});

const Users = () => {
  const classes = useStyle();
  const [usersServers, setUsersServers] = useState([[]]);
  const updateUsers = async () => {
    Object.keys(servers).forEach(async (server) => {
      const res = await fetch(`${servers[server]}/users`);
      if (res.ok) {
        const buf = [...usersServers];
        buf[server] = await res.json();
        setUsersServers(buf);
      }
    });
  };

  useEffect(() => {
    updateUsers();
    const intervalUpdate = setInterval(() => {
      updateUsers();
    }, 2000);
    return () => {
      clearInterval(intervalUpdate);
    };
  }, []);

  return (
    <>
      <Typography component="h1" variant="h4" className={classes.title}>
        Number of users
      </Typography>
      <Grid container spacing={3}>
        {usersServers.map((users, index) => (
          <ChatroomCounter
            chatrooms={users}
            address={servers[index]}
            key={servers[index]}
          />
        ))}
      </Grid>
      <Typography
        component="h1"
        variant="h4"
        className={[classes.title, classes.spacer]}
      >
        users names
      </Typography>
      {usersServers.map((users, index) => (
        <ChatroomsDisplay
          chatrooms={users}
          address={servers[index]}
          key={servers[index]}
        />
      ))}
    </>
  );
};

export default Users;
