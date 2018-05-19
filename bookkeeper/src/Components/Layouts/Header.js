import React, {Component, Fragment}  from 'react';
import Periods from '../Periods'; 

class Header extends Component {

  getOrdersByDate(){
    return Object.entries(this.state.Orders.reduce((dates, Orders) =>{
        const {date} = Orders

        dates[date] = dates[date] ? [...dates[date], Orders]
          : [Orders]

        return dates
      }, {})
    )
  }

  render() {
  
    return (
      <Fragment>
      <Periods onSelect={this.props.onSelect} periods={this.props.periods} period={this.props.period}/>
       </Fragment>
     )
  }
}

export default Header;



// export default ({Orders}) => {
  
  // const ordersCompleted = Orders.reduce((acc, o) => acc + o.completedOrders, 0);
  // const totalOders = Orders.length

  
  // handlePeriodSelected = period => {
  //   this.setsate({
      
  //   })
  // }
  
  // const orderForCurrentPeriod = Orders.map(group => {
  //   const testDate = group.date.split('T')
  //   if ( testDate == moment.format('YYYY-MM-DD'))
  //   {
  //     group.date
  //   }
  // })


//   return (
//     <div>
//       <Periods onSelect={this.handlePeriodSelected}/>
//       <div>Orders: {totalOders} Completed Orders: {ordersCompleted}</div>
      
      
//     </div>
//   )
// }