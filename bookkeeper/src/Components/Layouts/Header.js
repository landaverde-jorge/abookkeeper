// import React, {Component, Fragment}  from 'react';
// import { AppBar, 
//         Toolbar, 
//         Typography, 
//         Tab, 
//         Tabs } from '@material-ui/core';
// import moment from 'moment';

// class Header extends Component {
//   state = {
//     value: 0,
//   }
  
//   handleChange = (event, value) => {
//     this.setState({ value });
//   };

//   getOrdersForToday = () => {
//     const today = moment().format('YYYY-MM-DD').toString()
//     this.state.Orders.map(group => {
//       if(moment(group.date).format('YYYY-MM-DD').toString === today){
//         group
//       }
//     })

//   }

//   render() {
  
//     return (
//         <AppBar>
//           <Toolbar>
//             <Typography  variant="headline" color="inherit" align='center'> 
//               DASHBOARD
//             </Typography>
//           </Toolbar>
//           <Tabs
//             value={this.state.value}
//             onChange= {this.handleChange}
//             indicatorColor="secondary"
//             textColor="secondary"
//             style={{border:'1px solid'}}
//             centered
//           >
//           <Tab label="Day" id='today'/>
//           <Tab label="Week" id='week'/>
//           <Tab label="Month" id='month'/>
//           </Tabs>
//           {this.state.value === 0 && console.log(this.getOrdersForToday)}
//           {this.state.value === 1 && "Stop"}
//           {this.state.value === 2 && "Keep going"}
//         </AppBar>
//      )
//   }
// }

// export default Header;



// // export default ({Orders}) => {
  
//   // const ordersCompleted = Orders.reduce((acc, o) => acc + o.completedOrders, 0);
//   // const totalOders = Orders.length

  
//   // handlePeriodSelected = period => {
//   //   this.setsate({
      
//   //   })
//   // }
  
//   // const orderForCurrentPeriod = Orders.map(group => {
//   //   const testDate = group.date.split('T')
//   //   if ( testDate == moment.format('YYYY-MM-DD'))
//   //   {
//   //     group.date
//   //   }
//   // })


// //   return (
// //     <div>
// //       <Periods onSelect={this.handlePeriodSelected}/>
// //       <div>Orders: {totalOders} Completed Orders: {ordersCompleted}</div>
      
      
// //     </div>
// //   )
// // }


//   // getOrdersByDate(){
//   //   return Object.entries(this.state.Orders.reduce((dates, Orders) =>{
//   //       const {date} = Orders

//   //       dates[date] = dates[date] ? [...dates[date], Orders]
//   //         : [Orders]

//   //       return dates
//   //     }, {})
//   //   )
//   // }