import React, { Component } from 'react'
import {Tab, Tabs, Paper} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

class Periods extends Component {
  render() {
    return (
      <Paper>
        <Tabs
          value={0}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Day" />
          <Tab label="Week" />
          <Tab label="Month" />
        </Tabs>
      </Paper>
    )
  }
}

export default Periods;




