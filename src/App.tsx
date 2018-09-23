import React from "react";
import { ConnectedRouter as Router } from "connected-react-router";
import { createBrowserHistory } from "history";
import "./App.css";
import { MainLayout } from "./MainLayout";
import { NavBar } from "./NavBar";
import { Body } from "./Body";
import { createStore } from "./rootStore";
import { Provider } from "react-redux";

const history = createBrowserHistory();
const store = createStore(history);

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <MainLayout navBar={() => <NavBar />} body={() => <Body />} />
        </Router>
      </Provider>
    );
  }
}

export default App;
