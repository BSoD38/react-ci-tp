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

const Chatrooms = () => {
  const classes = useStyle();
  const [chatroomServers, setChatroomServers] = useState({});
  const updateChatrooms = async () => {
    const results = [];
    for (const server of servers) {
      results.push(fetch(`${server}/chatrooms`));
    }
    const data = await Promise.all(results);
    const jsonData = [];
    for (const request of data) {
      jsonData.push(request.json());
    }
    const finalData = await Promise.all(jsonData);
    const ret = {};
    Object.keys(servers).forEach((key) => {
      ret[servers[key]] = finalData[key];
    });
    setChatroomServers(ret);
  };

  useEffect(() => {
    updateChatrooms();
    const intervalUpdate = setInterval(() => {
      updateChatrooms();
    }, 2000);
    return () => {
      clearInterval(intervalUpdate);
    };
  }, []);

  return (
    <>
      <Typography component="h1" variant="h4" className={classes.title}>
        Number of chatrooms
      </Typography>
      <Grid container spacing={3}>
        {Object.entries(chatroomServers).map(([index, chatrooms]) => (
          <ChatroomCounter chatrooms={chatrooms} address={index} key={index} />
        ))}
      </Grid>
      <Typography
        component="h1"
        variant="h4"
        className={`${classes.title} ${classes.spacer}`}
      >
        Chatroom names
      </Typography>
      {Object.entries(chatroomServers).map(([index, chatrooms]) => (
        <ChatroomsDisplay chatrooms={chatrooms} address={index} key={index} />
      ))}
    </>
  );
};

export default Chatrooms;
