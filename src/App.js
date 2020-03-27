import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./screens/Home";
import Records from "./screens/Records";
import Settings from "./screens/Settings";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/settings" exact component={Settings} />
          <Route path="/records" exact component={Records} />
        </Router>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    add: () => dispatch({ type: "ADD" }),
    subtract: () => dispatch({ type: "SUBTRACT" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
