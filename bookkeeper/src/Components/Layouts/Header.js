import React, {Component} from 'react';
import Periods from '../Periods'

export default ({Orders}) => {
  
  const ordersCompleted = Orders.reduce((acc, o) => acc + o.completedOrders, 0);
  const totalOders = Orders.length

  return (
    <div>
      <Periods />
      <div>Orders: {totalOders} Completed Orders: {ordersCompleted}</div>
      
      
    </div>
  )
}
