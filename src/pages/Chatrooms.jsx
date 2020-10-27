import { Card, CardContent, makeStyles, Typography, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";

const useStyle = makeStyles({
    title: {
        marginBottom: "10px"
    }
});

const Chatrooms = () => {
    const classes = useStyle();
    const [chatrooms, setChatrooms] = useState([]);
    const updateChatrooms = () => {
        setChatrooms(["test"]);
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
            <Grid container spacing="3">
                <Card>
                    <CardContent>
                        <Typography variant="h6">
                            127.0.0.1:4567
                        </Typography>
                        <Typography variant="h2" align="center">
                            {chatrooms.length}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
}

export default Chatrooms;