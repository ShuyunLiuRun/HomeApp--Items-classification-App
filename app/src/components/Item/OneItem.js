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
import Popover from '@material-ui/core/Popover';

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
  typography: {
    padding: theme.spacing(2),
  },
}));
// each item is wrapped in a litte square 
var OneItem = ({ data, clickOnItem, deleteItem }) => {
  const classes = useStyles();
  const { item_name, item_id, contained_by, level, container_name, additional_json, is_container } = data;
  // for information btn
  const [anchorEl, setAnchorEl] = React.useState(null);
  //set a state to record status of the dialog
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogWhenYes = () => {
    setDialogOpen(false);
    deleteItem(item_id);
  };

  const handleDialogWhenNo = () => {
    setDialogOpen(false);
  };

  //handle the click on 'information' btn
  const handleInfoBtnClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleInfoBtnClose = () => {
    setAnchorEl(null);
  }

  const popOpen = Boolean(anchorEl);
  const id = popOpen ? 'simple-popover' : undefined;

  return (
    <Card className={classes.root}>
      <Button className="delete-button" onClick={handleClickOpen}>
        <DeleteForeverIcon />
      </Button>
      <Dialog
        open={dialogOpen}
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

      <div className="handle-clickItem" >
        <CardActionArea>
          <div className="upload-img">
            <label>
              <CardMedia
                component="img"
                height="100"
                image={require("./defaultImage.png")}
                title="click to check items"
              />
            </label>
            <input type='file' onChange={console.log("click on upload img")} />
          </div>

        </CardActionArea>
        <CardActionArea>
          <CardContent onClick={() => { if (is_container) clickOnItem(item_name, item_id, level, contained_by, additional_json, is_container) }}>
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
          <Button
            size="small"
            aria-describedby={id}
            onClick={handleInfoBtnClick}>
            Information
          </Button>
          <Popover
            id={id}
            open={popOpen}
            anchorEl={anchorEl}
            onClose={handleInfoBtnClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography className={classes.typography}>
              {(container_name === ' ' || container_name === null) ? "" : `Contained by: ${container_name}`} <br />
              Description: {additional_json === ' ' || additional_json === '' || additional_json === null ? "none" : additional_json}
            </Typography>
          </Popover>
        </div>
      </CardActions>
    </Card>

  );
}




export default OneItem