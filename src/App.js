import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Orders from "./Orders";
import Play from "./Play";
import LandingPage from "./Landing";
import Listing from "./Listing";
import Streams from "./Streams";
import UserDashboard from "./UserDashboard";
import UserUpdate from "./UserUpdate";
import AdminUpdate from "./AdminUpdate";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/landing">
            <LandingPage />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/play">
            <Play />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/listing">
            <Header />
            <Listing />
          </Route>
          <Route path="/streams">
            <Header />
            <Streams />
          </Route>
          <Route path="/dashboard">
            <Header />
            <UserDashboard />
          </Route>
          <Route path="/user/update">
            <Header />
            <UserUpdate />
          </Route>
          <Route path="/admin/update">
            <Header />
            <AdminUpdate />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
