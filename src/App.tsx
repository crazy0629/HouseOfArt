import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { AbstractPage, ArtPage, LandingPage } from "./pages";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/allart" element={<ArtPage />} />
          <Route path="/allart/abstract" element={<AbstractPage />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
