import React from "react";
import { Route, Switch } from "react-router-dom";
import Intro from "./views/Intro/Intro";
import NavBar from "./views/Nav/NavBar";
import LandingPage from "./views/Landing/LandingPage";
import Detail from "./views/Landing/DetailPage";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/home" component={LandingPage} />
        <Route exact path="/home/detail" component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
