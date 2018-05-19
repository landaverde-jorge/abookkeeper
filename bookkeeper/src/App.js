import React, { Component, Fragment } from 'react';
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import Body from './Components/Layouts/Body';
import Items from './Components/Items';
import Orders from './Components/Orders';
// import moment from 'moment';

class App extends Component {
  state = {
    Items,
    Orders,
  }

//   moment(dateToCheck).isSame(new Date(), 'week'); //true if dates are in the same week
// moment(dateToCheck).isSame(new Date(), 'month'); //true if dates are in the same month
// moment(dateToCheck).isSame(new Date(), 'year'); //true if dates are in the same year

  getOrdersByDate(){
    return this.state.Orders.reduce((dates, Orders) =>{
      const {date} = Orders

      dates[date] = dates[date] ? [...dates[date], Orders]
        : [Orders]

      return dates
    }, {})
  }

  render() {
    // const date = this.state.Orders[0].date
    // const dateOfOrder = moment(date).format('YYYY-MM-DD')
    console.log(this.getOrdersByDate())
    return (
      <Fragment>
        <Header Orders={Orders}/>
        <Body Orders={Orders}/>
        <Footer Items={Items}/>
        
      </Fragment>
    );
  }
}

export default App;
