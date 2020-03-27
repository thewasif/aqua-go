import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  BottomNavigation,
  BottomNavigationAction
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { Home, BarChart, Settings } from "@material-ui/icons";
import { Top, Bottom, Middle, App } from "./style";

function Layout(props) {
  let [screen] = useState(window.location.pathname);
  const { title } = props;
  return (
    <App>
      <Top>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h5">{title}</Typography>
          </Toolbar>
        </AppBar>
      </Top>

      <Middle>{props.children}</Middle>

      <Bottom>
        <BottomNavigation
          showLabels
          onChange={(e, newValue) => {
            props.history.push(newValue);
          }}
          value={screen}
        >
          <BottomNavigationAction label="Home" icon={<Home />} value="/" />
          <BottomNavigationAction
            label="Records"
            icon={<BarChart />}
            value="/records"
          />
          <BottomNavigationAction
            label="Settings"
            icon={<Settings />}
            value="/settings"
          />
        </BottomNavigation>
      </Bottom>
    </App>
  );
}

export default withRouter(Layout);
