import React from "react";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Careerfair from "./pages/CareerFair/Careerfair";
import Events from "./pages/Events/Events";
import Home from "./pages/Home/Home";
import Membership from "./pages/Membership/Membership";
import News from "./pages/News/News";

function initializeReactGA() {
  ReactGA.initialize("UA-152061658-1");
  ReactGA.pageview(window.location.pathname + window.location.search);
}
const App = () => {
  initializeReactGA();
  return (
    <Router>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/membership/" component={Membership} />
      <Route path="/calendar/" component={Events} />
      <Route path="/careerfair/" component={Careerfair} />
      <Route path="/news/" component={News} />
      {/* <Route path='/points/' component={Points} /> */}
    </Router>
  );
};

export default App;
