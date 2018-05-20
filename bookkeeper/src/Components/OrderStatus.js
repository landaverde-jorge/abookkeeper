import React from 'react';

export default ({ordersForToday}) => {

  const orders = ordersForToday.length;
  const completedOrders = ordersForToday.reduce((acc, o) => acc + o.completedOrders, 0);
  return (

    <div>
      Orders: {orders} Completed Orders: {completedOrders} 
      {console.log(ordersForToday)}
    </div>
  );
};