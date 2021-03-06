import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  withStyles,
  Grid,
  TextField,
  InputAdornment
} from "@material-ui/core";
import api from "../../../api.json";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  pos: {
    marginBottom: 12
  },
  form: {
    width: "100%"
  },
  textField: {
    width: "100%"
  }
};

function ExamenForm(props) {
  const { classes } = props;
  return (
    <Grid item xs={12} md={4}>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            color="primary"
            gutterBottom
            variant="title"
            component="h1"
          >
            Crear Examen
          </Typography>
          <form className={classes.form}>
            <TextField
              label="Títutlo"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              select
              label="Materia"
              className={classes.textField}
              SelectProps={{ native: true }}
              margin="normal"
              onChange={e => props.handleChange(e, "materia")}
              value={props.materia}
            >
              {Object.keys(api.materias).map((materia, id) => (
                <option key={id} value={materia}>
                  {materia}
                </option>
              ))}
            </TextField>
            <TextField
              select
              label="Tema"
              className={classes.textField}
              SelectProps={{ native: true }}
              margin="normal"
            >
              <option hidden value="" />
              {Object.keys(api.materias[props.materias]).map((materia, id) => (
                <option key={id} value={materia}>
                  {materia}
                </option>
              ))}
            </TextField>
            <TextField
              label="Títutlo"
              className={classes.textField}
              margin="normal"
            />
          </form>
        </CardContent>
        <CardActions>
          <Button fullWidth color="primary" variant="contained" size="small">
            Guardar
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default withStyles(styles)(ExamenForm);
