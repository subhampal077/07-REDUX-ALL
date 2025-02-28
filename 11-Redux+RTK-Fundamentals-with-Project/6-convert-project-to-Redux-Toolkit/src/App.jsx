import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
