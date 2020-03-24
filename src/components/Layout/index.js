import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
  Switch
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { Home, BarChart, Settings } from '@material-ui/icons';
import { Top, Bottom, Middle, App } from './style';

function Layout(props) {
  let [screen, setScreen] = useState(window.location.pathname);
  const { title } = props;
  return (
    <App>
      <Top>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h5">{title}</Typography>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              style={{
                marginLeft: 'auto'
              }}
            >
              <Switch />
            </IconButton>
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
