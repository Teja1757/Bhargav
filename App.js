// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginShow from "./Login.tsx";
import Home from "./Home.tsx";
import Dashboard from "./Dashboard.tsx";
import Checkpoint from "./Checkpoint.tsx";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<LoginShow />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/checkpoint" element={<Checkpoint />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
