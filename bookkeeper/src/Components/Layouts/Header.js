import React, {Component} from 'react';
import {Tabs, Paper} from '@material-ui/core';
import Tab from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';


class Header extends Component {
  render() {
    return (
      <Paper>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Paper>
    );
  }
}

export default Header;
