import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
// each item is wrapped in a litte square 
var OneItem = ({ data, clickOnItem ,deleteItem}) => {
  const classes = useStyles();
  const { item_name, item_id, level, contained_by, additional_json, is_container } = data;

  //set a state to record status of the dialog
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDialogWhenYes = () => {
    setOpen(false);
    deleteItem(item_id);
  };

  const handleDialogWhenNo = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.root}>
      <Button className="delete-button" onClick={handleClickOpen}>
        <DeleteForeverIcon />
      </Button>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`${item_name} will be deleted in database forever.`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to continue?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogWhenYes} color="primary">
            Yes
          </Button>
          <Button onClick={handleDialogWhenNo} color="primary" autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>

      <div className="handle-clickItem" onClick={() => { if (is_container) clickOnItem(item_name, item_id, level, contained_by, additional_json, is_container) }}>
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