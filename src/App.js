import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import ManageProfiles from "./containers/ManageProfiles/ManageProfiles";
// //store
// import store from "./store/index";
// import { fetchUser } from "./store/auth/actions";
// store.dispatch(fetchUser());

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path='/'>
            No page here
        </Route> */}
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/login">
          <Redirect to="/" />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/browse">
          <Home />
        </Route>
        <Route exact path="/manage-profiles">
          <ManageProfiles />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
