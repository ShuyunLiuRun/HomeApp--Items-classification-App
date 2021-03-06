import React, { useState } from 'react';
import Items from './Items/Items.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
    progressRoot: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
    cardRoot: {
        width: 180,
        height: 180,
        margin: '45px 10px 45px 10px',
    },
    cardMedia: {
        height: 150,
        width: 150,
    },
    headerRoot: {
        flexGrow: 1,
    },
    headerMenuButton: {
        marginRight: theme.spacing(2),
    },
    headerTitle: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    headerSearch: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    headerSearchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerInputRoot: {
        color: 'inherit',
    },
    headerInputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Main = ({ Data, clickOnItem, goBack, goHome, deleteItem, handleSearch, currentContainer, isLoading }) => {
    const classes = useStyles();
    const [search, setSearch] = useState(null);
    const handleSearchChange = (event)=>{
        setSearch(event.target.value);
    }

    const handleKeyDown = (e)=>{
        if(e.keyCode === 13){
            handleSearch(search);
        }
    }

    return (
        isLoading ?
            <div className={classes.progressRoot}>
                <CircularProgress />
                {/* <CircularProgress color="secondary" /> */}
            </div> :
            <div className="main">
                <div className="header">
                    <div className={classes.headerRoot}>
                        <AppBar position="static">
                            <Toolbar>
                                <IconButton
                                    edge="start"
                                    className={classes.headerMenuButton}
                                    color="inherit"
                                    aria-label="go back"
                                    onClick={goBack}
                                >
                                    <ArrowBackIcon  />
                                </IconButton>

                                <Typography className={classes.headerTitle} variant="h6" noWrap>
                                    {currentContainer}
                                </Typography>

                                <IconButton
                                    edge="start"
                                    className={classes.headerMenuButton}
                                    color="inherit"
                                    aria-label="go to home"
                                    onClick={goHome}
                                >
                                    <HomeIcon  />
                                </IconButton>
                                <div className={classes.headerSearch}>
                                    <div className={classes.headerSearchIcon}>
                                        <SearchIcon />
                                    </div>
                                    <InputBase
                                        placeholder="Search…"
                                        onChange={handleSearchChange}
                                        onKeyDown={handleKeyDown}
                                        classes={{
                                            root: classes.headerInputRoot,
                                            input: classes.headerInputInput,
                                        }}
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </div>
                            </Toolbar>
                        </AppBar>
                    </div>
                </div>
                <div className="body-contents">
                    <div className="list-items" style={itemsStyle}>
                        {/* showcase all the items */}
                        <Items data={Data} clickOnItem={clickOnItem} deleteItem={deleteItem} />

                        {/* this is a card used to add an item */}
                        <Link to="/form" >
                            <Card id="add-item" className={classes.cardRoot} variant="outlined">
                                <CardActions>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={require("../img/icon-plus.png")}
                                        title="Add Item"
                                    />
                                </CardActions>
                            </Card>
                        </Link>
                    </div>
                </div>

            </div>
    )


}

const itemsStyle = {
    display: "flex",
    flexWrap: "wrap"
}
export default Main
