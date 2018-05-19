import React, { Component} from 'react';
// import Header from './Components/Layouts/Header';
// import Footer from './Components/Layouts/Footer';
// import Periods from './Components/Periods';
import Items from './Components/Items';
import Orders from './Components/Orders';
import {Tab, Tabs, AppBar, Toolbar, Typography} from '@material-ui/core';
import moment from 'moment';

class App extends Component {
  state = {
    Items,
    Orders,
    value: 0,
    today: moment().format('YYYY-MM-DD'),
  }
  
  handleChange = (event, value) => {
    this.setState({ value });
  };

  

  getOrdersForToday(){
    return this.state.Orders.filter(
      group => moment(group.date, 'YYYY-MM-DD').isSame(this.state.today)
    )
  }
  getOrdersForWeek(){
    return this.state.Orders.filter(
      group => moment(group.date, 'YYYY-MM-DD').isBetween(moment().startOf('week'), moment().endOf('week'), null, '[]')
    )
  }
  getOrdersForMonth(){
    return this.state.Orders.filter(
      group => moment(group.date, 'YYYY-MM-DD').isBetween(moment().startOf('month'), moment().endOf('month'), null, '[]')
    )
  }


  render() {
    // const today = moment().format('YYYY-MM-DD').toString()


    return (
      <div>
       <AppBar>
          <Toolbar>
            <Typography  variant="headline" color="inherit" align='center'> 
              DASHBOARD
            </Typography>
          </Toolbar>
          <Tabs
            value={this.state.value}
            onChange= {this.handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            style={{border:'1px solid'}}
            centered
          >
          <Tab label="Day" id='today'/>
          <Tab label="Week" id='week'/>
          <Tab label="Month" id='month'/>
          </Tabs>
          {this.state.value === 0 && console.log(this.getOrdersForToday())}
          {/* {this.state.value === 0 && console.log(moment(this.state.Orders[0].date).format('YYYY-MM-DD').toString(), moment().format('YYYY-MM-DD').toString())} */}
          {this.state.value === 1 && console.log(this.getOrdersForWeek())}
          {this.state.value === 2 && console.log(this.getOrdersForMonth())}
          {Items.map(group => {
            return <div key={group.id}>{group.name} {group.price}</div>;
          })}
        </AppBar>
      </div>
    );
  }
}

export default App;


// moment(dateToCheck).isSame(new Date(), 'week'); //true if dates are in the same week
// moment(dateToCheck).isSame(new Date(), 'month'); //true if dates are in the same month
// moment(dateToCheck).isSame(new Date(), 'year'); //true if dates are in the same year

  // getOrdersByDate(){
  //   return this.state.Orders.reduce((dates, Orders) =>{
  //     const {date} = Orders

  //     dates[date] = dates[date] ? [...dates[date], Orders]
  //       : [Orders]

  //     return dates
  //   }, {})
  // }
      // const date = this.state.Orders[0].date
    // const dateOfOrder = moment(date).format('YYYY-MM-DD')
    // console.log(this.getOrdersByDate())