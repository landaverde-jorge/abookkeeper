import React, { Component } from 'react';
import {PieChart} from 'react-easy-chart';



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
        <PieChart
          size={250}
          innerHoleSize={200}
          data={[
            { key: 'A', value: 200, color: '#aaac84' },
            { key: 'B', value: 50, color: '#dce7c5' },
          ]}
        />
        {/* <PieChart
          size={200}
          innerHoleSize={150}
          data={[
            { key: 'A', value: 200, color: '#aaac84' },
            { key: 'B', value: 50, color: '#dce7c5' },
          ]}
        /> */}
        Sales
      </div>
    );
  }
}

export default Sales;

