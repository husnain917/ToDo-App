import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LoginIcon from '@mui/icons-material/Login';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link } from 'react-router-dom';
import { Button, SwipeableDrawer } from '@mui/material';
import { FallingLines } from "react-loader-spinner";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// dispatch
import { useDispatch, useSelector } from "react-redux";

// Actions
import { logOutUser } from "../../store/actions/LogInAction";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function SideBar({ children }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    // Store
    const logInUserName = useSelector((store) => store.LogInReducer.user);
    const currentUserName = logInUserName.displayName;
    // state
    const [loader, setLoader] = useState(false);

    // dispatch
    const dispatch = useDispatch();

    // Logout
    const logOutHandler = () => {
        dispatch(logOutUser(setLoader));
    }

    // loading
    if (loader) {
        return (
            <>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "73vh" }}>
                    <FallingLines width="110" color="blue" />
                </div>
            </>
        )
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        To Do App
                    </Typography>
                    <Button color="inherit">{currentUserName ? currentUserName : <AccountCircleIcon />}</Button>
                    <Button color="inherit" onClick={logOutHandler}>Logout</Button>
                </Toolbar>
            </AppBar>
            <SwipeableDrawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <Typography variant='h6' marginRight={15} onClick={handleDrawerClose}>
                        Close
                    </Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ClearIcon /> : <ClearIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <ListItem button>
                            <ListItemIcon style={{ marginLeft: "15px" }} >
                                <PersonAddAltIcon color='primary' />
                            </ListItemIcon>
                            <ListItemText primary="Add Employee" />
                        </ListItem>
                    </Link>
                    <Link to="/showEmployee" style={{ textDecoration: "none" }}>
                        <ListItem button>
                            <ListItemIcon style={{ marginLeft: "15px" }}>
                                <VisibilityIcon color='primary' />
                            </ListItemIcon>
                            <ListItemText primary="Show Employee" />
                        </ListItem>
                    </Link>
                    <Link to="/logIn" style={{ textDecoration: "none" }}>
                        <ListItem button>
                            <ListItemIcon style={{ marginLeft: "15px" }}>
                                <LoginIcon color='primary' />
                            </ListItemIcon>
                            <ListItemText primary="Login" />
                        </ListItem>
                    </Link>
                    <Link to="/signUp" style={{ textDecoration: "none" }}>
                        <ListItem button>
                            <ListItemIcon style={{ marginLeft: "15px" }}>
                                <LockOpenIcon color='primary' />
                            </ListItemIcon>
                            <ListItemText primary="Sign UP" />
                        </ListItem>
                    </Link>
                </List>
            </SwipeableDrawer>
            <Main open={open}>
                <DrawerHeader />
                {children}
            </Main>
        </Box>
    );
}
