import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {  Link, BrowserRouter as Router} from 'react-router-dom';

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
// each item is wrapped in a litte square container
var OneItem = ({ data, clickOnItem }) => {
  const classes = useStyles();
  const { item_name, item_id, level, contained_by, additional_json } = data;



  return (
    <Card className={classes.root}>
      {/* pass all attribute back to root, then setState*/}
      <div className="handle-clickItem" onClick={() => clickOnItem(item_name, item_id, level, contained_by, additional_json)}>
      
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={require("./defaultImage.png")}
          title="click to check items"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* Descriptions  */}
          </Typography>
        </CardContent>
      </CardActionArea>

      </div>
      <CardActions>
        <div className="button">
        <Button size="small" >Information</Button>
        </div>
      </CardActions>
    </Card>
  );
}




export default OneItem