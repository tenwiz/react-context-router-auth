import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { AuthConsumer } from "./AuthContext";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Hello = () => {
  const classes = useStyles();
  return (
    <AuthConsumer>
      {({ logout }) => (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Hello Marcus!
            </Typography>
            <Button color="secondary" onClick={logout}>
              Logout
            </Button>
          </div>
        </Container>
      )}
    </AuthConsumer>
  );
};

export default Hello;
