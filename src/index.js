import React from "react";
import ReactDOM from "react-dom";
import App from "./app notes/App.jsx";
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Accueil from "./acceuil/Acceuil.js";


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Routes>
    <Route path="/" element={<Accueil />}></Route>
    <Route path="/notes-app" element={<App />}></Route>
    </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
