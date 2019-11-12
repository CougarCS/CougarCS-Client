import React from "react";
import ReactGA from "react-ga";
// import bodyImage from '../assets/'
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Careerfair from "./pages/CareerFair/Careerfair";
import Events from "./pages/Events/Events";
import Home from "./pages/Home/Home";
import Membership from "./pages/Membership/Membership";

function initializeReactGA() {
  ReactGA.initialize("G-9HFJT96TWP");
  ReactGA.pageview("/");
}
const App = () => {
  initializeReactGA();
  return (
    <Router>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/membership/" component={Membership} />
      <Route path="/events/" component={Events} />
      <Route path="/careerfair/" component={Careerfair} />
      {/* <Route path='/points/' component={Points} /> */}
    </Router>
  );
};

export default App;
