import React from 'react';
import {

    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import AllUsers from '../AdminPages/AllUsers/AllUsers';
import AddSubscription from '../AdminPages/AddSubscription/AddSubscription';
import SubsList from '../AdminPages/SubsList/SubsList';
import Notes from '../UsersPages/Notes/Notes';
import useAuth from '../../hooks/useAuth';
import DashboardHome from './DashboardHome/DashboardHome';








const avatar = <FontAwesomeIcon icon={faUserCircle} />
const drawerWidth = 240;


// dashboard component
const Dashboard = (props) => {
    const loginCheck = sessionStorage.getItem('email')
    const { user, logOut } = useAuth()

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    // const [client, setClient] = useState({})
    let { path, url } = useRouteMatch();



    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div>
            <Toolbar >

                <Typography variant="h3" className="color-b" sx={{ fontSize: '2' }}>{avatar}</Typography>
                <Typography variant="h6" sx={{ ml: 2 }} className="color-b">
                    <Link
                        to="/home" className="color-b" style={{ textDecoration: 'none' }}
                    ></Link>
                </Typography>
            </Toolbar>
            <Divider />

            {
                user[0]?.role === 'User' &&
                <List>
                    <ListItem button>
                        <Link to={`${url}`} className="color-b" style={{ textDecoration: 'none' }}>Dashboard</Link>
                    </ListItem>
                    <ListItem button>
                        <Link to={`${url}/myNotes`} className="color-b" style={{ textDecoration: 'none' }}>My Notes</Link>
                    </ListItem>
                </List>
            }


            {
                user[0]?.role === 'Admin' &&
                <List>
                    <ListItem button>
                        <Link to={`${url}/allUsers`} className="color-b" style={{ textDecoration: 'none' }}>
                            All Users
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <Link to={`${url}/subscriptionList`} className="color-b" style={{ textDecoration: 'none' }}>Subscription List</Link>
                    </ListItem>
                    <ListItem button>
                        <Link to={`${url}/addSubscription`} className="color-b" style={{ textDecoration: 'none' }}>Add Subscription</Link>
                    </ListItem>
                </List>
            }

            <ListItem button>
                <Link to="/home" className="color-b" style={{ textDecoration: 'none' }}>Go Home</Link>
            </ListItem>
            <Divider />
            <List>

                <ListItem>
                    {
                        loginCheck ?

                            <Button sx={{ width: '100%' }} onClick={logOut}>Logout</Button>
                            :
                            <Link className='link' to="/Login">Login</Link>
                    }
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;







    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />




                {/*---------- nested routing----------- */}

                <Switch>
                    <Route exact path={path}>

                    </Route>
                    <Route path={`${path}/myNotes`}>
                        <Notes></Notes>
                    </Route>
                    <Route path={`${path}/allUsers`}>
                        <AllUsers></AllUsers>
                    </Route>
                    <Route path={`${path}/subscriptionList`}>
                        <SubsList></SubsList>
                    </Route>
                    <Route path={`${path}/addSubscription`}>
                        <AddSubscription></AddSubscription>
                    </Route>
                </Switch>

            </Box>
        </Box>
    );
};

export default Dashboard;