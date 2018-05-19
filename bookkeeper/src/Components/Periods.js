import React, { Component } from 'react';
import {Tab, Tabs, Paper} from '@material-ui/core';
// import moment from 'moment';
class Periods extends Component {
  state = {
    value: 0,
  }
  
  handleChange = (event, value) => {
    this.setState({ value });
  };

  // getTodayPeriod(){
  //   return moment().format('YYYY-MM-DD')
  // }
  // getWeekPeriod(){
  //   return moment.weekdays()
  // }
  // getMonthPeriod(){
  //   return moment.monthdays()
  // }

  render() {

    return (
      <Paper>
        <Tabs
          value={this.state.value}
          onChange= {this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Day" id={'today'}/>
          <Tab label="Week" id={'week'}/>
          <Tab label="Month" id={'month'}/>
        </Tabs>
      </Paper>
    )
  }
}

export default Periods;




