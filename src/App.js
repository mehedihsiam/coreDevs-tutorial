import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import Addnote from './Pages/UsersPages/Notes/AddNote/Addnote';
import EditNotes from './Pages/UsersPages/Notes/EditNotes/EditNotes';
import Dashboard from './Pages/Dashboard/Dashboard';
import Subscription from './Pages/UsersPages/Subscription/Subscription';
import SubsDetail from './Pages/UsersPages/Subscription/SubsDetail/SubsDetail';
import EditSubs from './Pages/AdminPages/SubsList/SingleSubsList/EditSubs/EditSubs';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Profile from './Pages/Profile/Profile';
import EditProfile from './Pages/EditProfile/EditProfile';




function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/SignUp'>
            <SignUp></SignUp>
          </Route>
          <PrivateRoute exact path='/notes/:id'>
            <EditNotes></EditNotes>
          </PrivateRoute>
          <PrivateRoute path='/Dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route exact path={`/Subscriptions`}>
            <Subscription></Subscription>
          </Route>
          <PrivateRoute exact path={`/Subscriptions/:id`}>
            <SubsDetail></SubsDetail>
          </PrivateRoute>
          <PrivateRoute exact path={`/subscriptions/edit/:id`}>
            <EditSubs></EditSubs>
          </PrivateRoute>
          <PrivateRoute exact path='/addNote'>
            <Addnote></Addnote>
          </PrivateRoute>
          <PrivateRoute exact path='/myProfile'>
            <Profile></Profile>
          </PrivateRoute>
          <PrivateRoute exact path='/myProfile/edit/:id'>
            <EditProfile></EditProfile>
          </PrivateRoute>
          <Route exact path='/Login'>
            <Login></Login>
          </Route>
          <Route exact path='/*'>
            <NotFound></NotFound>
          </Route>
        </Switch>

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
