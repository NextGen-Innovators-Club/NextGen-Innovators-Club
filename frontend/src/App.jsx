import React from "react";
import MainPage from "./components/pages/MainPage";
import TeamPage from "./components/pages/TeamPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </Router>
  );
}

export default App;
