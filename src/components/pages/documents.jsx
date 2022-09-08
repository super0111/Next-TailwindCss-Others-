import React from 'react';

import NavBar from '../core/navBar'

import FooterBar from '../core/footerBar'



class Users extends React.Component {

  render() { 
      return (
          <div className="App" style={{width:"100%", height:"100vh", margin:0, padding:0}}>
              <div id="background" style={{width:"100%", }}>
                  <NavBar />
                        <h1>Users</h1>
                  <FooterBar />
              </div>    
          </div>
          
      );
  }
  
}
export default Users

