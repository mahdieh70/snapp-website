import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LayOut from "./components/layout";
import Landing from "./components/landing/index";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayOut />} />
      </Routes>
    </Router>
  );
};

export default App;
