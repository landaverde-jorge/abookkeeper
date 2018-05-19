// import React, { Component } from 'react';
// import {Tab, Tabs, Paper, AppBar} from '@material-ui/core';
// import TotalSales from './TotalSales';
// import OrderStatus from './OrderStatus';
// import moment from 'moment'

// // import moment from 'moment';
// class Periods extends Component {
//   state = {
//     value: 0,
//   }
  
//   handleChange = (event, value) => {
//     this.setState({ value });
//   };


//   render() {

//     return (
//       <Paper>
//         <Tabs
//           value={this.state.value}
//           onChange= {this.handleChange}
//           indicatorColor="secondary"
//           textColor="secondary"
//           style={{border:'1px solid'}}
//           centered
//         >
//           <Tab label="Day" id='today'/>
//           <Tab label="Week" id='week'/>
//           <Tab label="Month" id='month'/>
//         </Tabs>
//         {this.state.value === 0 && "Hello"}
//         {this.state.value === 1 && "Stop"}
//         {this.state.value === 2 && "Keep going"}
//       </Paper>
//     )
//   }
// }

// export default Periods;





//   // getTodayPeriod(){
//   //   return moment().format('YYYY-MM-DD')
//   // }
//   // getWeekPeriod(){
//   //   return moment.weekdays()
//   // }
//   // getMonthPeriod(){
//   //   return moment.monthdays()
//   // }
//   // <OrderStatus/>
//   // <TotalSales/>
//   // <Sales/>