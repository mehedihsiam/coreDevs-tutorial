import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import Addnote from './Pages/UsersPages/Notes/AddNote/Addnote';
import Notes from './Pages/UsersPages/Notes/Notes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/SignUp'>
          <SignUp></SignUp>
        </Route>
        <Route exact path='/notes'>
          <Notes></Notes>
        </Route>
        <Route exact path='/addNote'>
          <Addnote></Addnote>
        </Route>
        <Route exact path='/Login'>
          <Login></Login>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
