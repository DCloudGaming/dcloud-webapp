import React from "react";
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
import Glance from "./Glance";
import UserDashboard from "./UserDashboard";
import UserUpdate from "./UserUpdate";
import AdminUpdate from "./AdminUpdate";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  console.warn = null;
  localStorage.setItem("backend_url", "159.223.91.60:8080")
  // TODO: add user state here
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
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

          {/* v.0.0.1 */}
          <Route path="/admin/update">
            <Header />
            <AdminUpdate />
          </Route>
          <Route path="/vote">
            <Header />
            <Home />
          </Route>
          <Route path="/glance">
            <Header />
            <Glance />
          </Route>
          <Route path="/play">
            <Play />
          </Route>
          <Route path="/">
            <Header />
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
