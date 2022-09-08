import React from 'react';
import { Route, Link } from 'react-router-dom'

import Firebase from './Firebase.js'
import NavBar from './components/core/navBar'
import HomeBody from './components/pages/home'
import FooterBar from './components/core/footerBar'

import './App.css'


class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          isAuthenticated: false
      }

      this.authHandler = this.authHandler.bind(this)
  } 

  
  authHandler(newValue) {
      this.setState({
        isAuthenticated: newValue
      })
  }

  render() { 
      return ( 
          <div>
              <HomeBody />
          </div>
          
      );
  }
}

export default App;
