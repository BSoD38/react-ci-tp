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
  const [chatroomServers, setChatroomServers] = useState([[]]);
  const updateChatrooms = async () => {
    Object.keys(servers).forEach(async (server) => {
      const res = await fetch(`${servers[server]}/chatrooms`);
      if (res.ok) {
        const buf = [...chatroomServers];
        buf[server] = await res.json();
        setChatroomServers(buf);
      }
    });
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
        {chatroomServers.map((chatrooms, index) => (
          <ChatroomCounter
            chatrooms={chatrooms}
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
        Chatroom names
      </Typography>
      {chatroomServers.map((chatrooms, index) => (
        <ChatroomsDisplay
          chatrooms={chatrooms}
          address={servers[index]}
          key={servers[index]}
        />
      ))}
    </>
  );
};

export default Chatrooms;
