import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login/Login";
import SelectProfiles from "./containers/SelectProfiles";
import Register from "./containers/Register/Register";
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
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/select-profiles">
          <SelectProfiles />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
