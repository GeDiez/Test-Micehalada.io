import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Menu from './Menu'
import Notifies from './Notifies'
import Content from './Content'
import Store from '../Store/Store'
import { actionGetProducts } from '../Actions/ActionsProducts'
import { actionGetBrands } from '../Actions/ActionsBrands'

import '../Css/App.css';
import '../Css/bootstrap.min.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      brands: [],//Marcas de produtos
      products: [],//Prodcutos alamcenados
      notify:{  //notificacion en respuesta a algun evento
      }
    }

    Store.subscribe(function() {
      let state = Store.getState()
      console.log('App.js')
      console.log(state)
      this.setState({
        brands: state.brands,
        products: state.products,
        notify: state.notify
      })
    }.bind(this))
  }
  
  componentDidMount() {
    Store.dispatch(actionGetProducts())
    Store.dispatch(actionGetBrands())
  }

  render() {
    return (
      <Router>
          <div className="App" >
          <Menu />
          <Notifies notify={ this.state.notify } />
          <Content brands={ this.state.brands } products={ this.state.products }/>
        </div>
      </Router>
    )
  }
}

export default App;
