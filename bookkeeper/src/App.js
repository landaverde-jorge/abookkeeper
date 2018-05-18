import React, { Component, Fragment } from 'react';
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import Body from './Components/Layouts/Body';
import Items from './Components/Items';
import Orders from './Components/Orders';




class App extends Component {
  states = [
    Items,
    Orders,
  ]

  render() {
    return (
      <Fragment>
        <Header Orders={Orders}/>
        <Body Orders={Orders}/>
        <ul>
        <Footer Items={Items}/>
        </ul>
      </Fragment>
    );
  }
}

export default App;
