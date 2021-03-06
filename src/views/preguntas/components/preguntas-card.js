import React from "react";
import {
  withStyles,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Divider,
} from "@material-ui/core/";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100,
  },
  card: {
    marginTop: 10,
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

function PreguntasCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="title" color="secondary">
            {props.name}
          </Typography>
          <br />
          <Divider />
          <br />
          <Typography variant="subheading">
            <b>Materia:</b> {props.materia}
          </Typography>
          <Typography variant="subheading">
            <b>Tema:</b> {props.tema}
          </Typography>
          <Typography variant="subheading">
            <b>Respuesta:</b> {props.respuesta}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
    </Card>
  );
}

export default withStyles(styles)(PreguntasCard);