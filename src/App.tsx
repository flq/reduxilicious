import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./MainLayout";
import { NavBar } from "./NavBar";
import { Body } from "./Body";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <MainLayout navBar={() => <NavBar />} body={() => <Body />} />
      </Router>
    );
  }
}

export default App;
