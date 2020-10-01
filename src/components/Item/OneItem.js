// each item is wrapped in a litte square container,
// TODO: set the css in this file(containers' size, background color...)
// TODO: Show the item's name in the suqare
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
    margin: 20,
  },
  button: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

var OneItem = ({ data }) => {
  const classes = useStyles();
  const { name } = data;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={require("./defaultImage.png")}
          title="click to check items"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* Descriptions  */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className="button">
        <Button size="small" >Information</Button>
        </div>
      </CardActions>
    </Card>
  );
}




export default OneItem