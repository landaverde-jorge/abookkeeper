import React, { Component } from 'react';

class Sales extends Component {
  // getOrdersByDate(){
  //   return Object.entries(this.props.ordersForToday.reduce((items, ordersForToday) =>{
  //     const {item} = ordersForToday;
    
  //     items[item] = items[item] ? [...items[item], ordersForToday]
  //       : [ordersForToday];
    
  //     return items;
  //   }, {})
  //   );
  // }
  
  render() {
    // const hOders = ordersForToday.reduce((acc, o) => acc + o.completedOrders, 0);
    // const bOrders = ordersForToday.reduce((acc, o) => acc + o.completedOrders, 0);
    // const fcOrders = ordersForToday.reduce((acc, o) => acc + o.completedOrders, 0);

    return (
      <div>
        Sales
      </div>
    );
  }
}

export default Sales;

