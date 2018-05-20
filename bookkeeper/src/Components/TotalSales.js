import React from 'react';

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
    <div>
      Total Sales: {price}
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