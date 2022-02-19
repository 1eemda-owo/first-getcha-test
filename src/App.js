import React from "react";
import { Route, Routes } from "react-router-dom";
import Intro from "./views/Intro";
import LandingPage from "./views/Landing/LandingPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/main" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;