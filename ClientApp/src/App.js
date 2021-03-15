import React, { Component } from 'react'
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Cars } from './components/Cars';
import { SellVehicle } from './components/SellVehicle';
import { ViewUsers } from './components/ViewUsers';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout>
          <Route exact path='/' component={Home}/>
          <Route path='/Inventory' component={Cars}/>
          <Route path='/ViewUsers' component={ViewUsers}/>
        </Layout>
      </div>
    )
  }
}

export default App