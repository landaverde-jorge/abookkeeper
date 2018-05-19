import React, {Component} from 'react';
import Sales from '../Sales';
import TotalSales from '../TotalSales';
import OrderStatus from '../OrderStatus';
import moment from 'moment'
// import Items from '../Items';
// import Orders from '../Orders';


class Body extends Component {

  render() {
    const today = moment().format('YYYY-MM-DD').toString()
    // const ordersCompleted = this.props.Orders.reduce((acc, o) => acc + o.completedOrders, 0);
    // const totalOders = this.props.Orders.length
    return (
      <div>
      <OrderStatus/>
      <TotalSales/>
      <Sales/>
      </div>
    );
  }
}

export default Body;