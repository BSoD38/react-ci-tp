import { makeStyles, Typography, Grid } from "@material-ui/core";
import { useEffect, useState, React } from "react";
import UserCounter from "../components/UserCounter";
import UsersDisplay from "../components/UsersDisplay";
import servers from "../servers";
import User from "../models/User";

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
  const [userServers, setUserServers] = useState({});
  const updateUsers = async () => {
    const results = [];
    for (const server of servers) {
      results.push(fetch(`${server}/users`));
    }
    const data = await Promise.all(results);
    const jsonData = [];
    for (const request of data) {
      jsonData.push(request.json());
    }
    const finalData = await Promise.all(jsonData);
    const ret = {};
    Object.keys(servers).forEach((key) => {
      ret[servers[key]] = User.constructMultiple(finalData[key]);
    });
    setUserServers(ret);
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
        {Object.entries(userServers).map(([index, users]) => (
          <UserCounter users={users} address={index} key={index} />
        ))}
      </Grid>
      <Typography
        component="h1"
        variant="h4"
        className={`${classes.title} ${classes.spacer}`}
      >
        User names
      </Typography>
      {Object.entries(userServers).map(([index, users]) => (
        <UsersDisplay users={users} address={index} key={index} />
      ))}
    </>
  );
};

export default Users;
