import React from 'react';
import {AreaChart} from 'react-easy-chart';



export default ({ ordersForToday, Items}) => {

  const itemsMap = new Map();
  let price = 0;
  
  for (const { name: itemName, orderQty } of ordersForToday) {
    if (itemsMap.has(itemName)) {
      price += itemsMap.get(itemName) * orderQty;
      continue;
    }
    for (const { name, price: itemPrice } of Items) {
      if (name !== itemName) continue;
      itemsMap.set(name, itemPrice);
      price += itemPrice * orderQty;
      break;
    }
  }
  
  return (
    <div style={{display: 'flex-box'}}>
      Total Sales: {price}
      <AreaChart
        xType={'text'}
        xTicks={5}
        yTicks={7}
        axes
        width={350}
        height={250}
        areaColors={['red', 'yellow', 'green']}
        interpolate={'cardinal'}
        data={[
          [
            { x: 1, y: 20 },
            { x: 2, y: 13 },
            { x: 3, y: 33 },
            { x: 4, y: 45 },
            { x: 5, y: 15 },
            { x: 6, y: 20 },
            { x: 7, y: 13 },
            { x: 8, y: 33 },
            { x: 9, y: 45 },
            { x: 10, y: 15 }
          ], [
            { x: 1, y: 13 },
            { x: 2, y: 15 },
            { x: 3, y: 13 },
            { x: 4, y: 15 },
            { x: 5, y: 13 },
            { x: 6, y: 15 },
            { x: 7, y: 13 },
            { x: 8, y: 15 },
            { x: 9, y: 13 },
            { x: 10, y: 20 }
          ], [
            { x: 1, y: 30 },
            { x: 2, y: 25 },
            { x: 3, y: 13 },
            { x: 4, y: 28 },
            { x: 5, y: 18 },
            { x: 6, y: 30 },
            { x: 7, y: 25 },
            { x: 8, y: 13 },
            { x: 9, y: 18 },
            { x: 10, y: 30 }
          ]
          
        ]}
      />
    </div>
  );
};




//   let totalPrice = 0;
// for (const order of orders) {
//   for (const item of items) {
//     if (item.name === order.itemName) {
//       totalPrice += item.price * order.orderQty;
//     }
//   }
// }
// const totalSales = ordersForToday.forEach(order 
//   => {
//    
// }Items.find(item 
//     => item.name === order.itemName).price * order.orderQty)
// const test = ordersForToday.map(order => { console.log(order); return Items.find(item => item.name === order.itemName).price * order.orderQty; })
// const test1 = Items.filter((item))

// const test2 = ordersForToday.forEach(order => 
//   Items.filter((item) => item.name === order.itemName ))
// let total = 0;
// // For all orders
// ordersForToday.forEach(order => {
//     // Find order in items
//     let item = Items.filter(item => order.name == item.name)[0];
//     // Add price to total
//     total += item.price * order.orderQty;
// });