import React, { Component } from 'react';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";
  
import {Helmet} from 'react-helmet'
import { Route, Link } from 'react-router-dom'

import NavBar from '../core/navBar'
import NavBarMobile from '../core/navBarMobile'

import FooterBar from '../core/footerBar'
import FooterBarMobile from '../core/footerBarMobile'


//Import stylesheets


class Home extends Component {
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

    styles = {
        banner: {
            width:'100%',
            height: '100vh', //Covers initial screen (Not fixed in place),
            contentAlign: 'center',
            textAlign: 'center',
        },
        homeBodySection: {
            backgroundColor:'rgba(255,255,255,0.2)',
            height:'30vh',
            padding:10
        },
        homeBodySectionHeaderText: {
            color:'rgb(220,220,220)'
        },
        homeBodySectionText: {
            color:'rgb(255,255,255)'
        },
        bannerText: {
            fontSize:'2vh',
            color:'rgb(220,220,220)',
            cursor: 'pointer'
        },
        bannerButton: {
            borderRadius:'1vh',
            background:'rgba(100,100,100,0.5)',
            fontSize:'2vh',
            height:'6vh',
            lineHeight:'6vh', 
            width:'20vw', 
            color:'white',
            cursor: 'pointer',
            margin:5,
            textDecoration:'none'
        }
    }


    
    renderContent = () => {
        if (isMobile) {
            return (
                <div className="App" style={{width:"100%", margin:0, padding:0}}>
                    <Helmet>
                        <title>InspectWA</title>
                        <meta name="description" content="The Industry Association of Building and Property Inspectors in WA – Inspect WA. Inspect WA’s vision is to be Western Australia’s peak body representing professional independent building and property inspection businesses." />
                    </Helmet>
                    <div id="background" style={{width:"100%", }}>
                        <NavBarMobile isAuthenticated={this.state.isAuthenticated} authHandler={this.authHandler}/>
                        <div style={{width:'100%',height: '100vh',contentAlign: 'center',textAlign: 'center'}}>   
                            <img src={require("../../assets/images/logoActual.png")} style={{width:'80vw', marginTop:'20vh'}}></img>
                            <br></br> 
                            <br></br>
                            <div style={{ display: 'inline-block', width:'90vw'}}>
                                <p style={{fontSize:'2vh',color:'rgb(220,220,220)',cursor: 'pointer'}}>
                                    Welcome to The Industry Association of Building and Property Inspectors in WA – Inspect WA. 
                                    Inspect WA’s vision is to be Western Australia’s peak body representing professional independent building and property inspection businesses.
                                </p>
                                <div style={{ display: 'inline-block'}}>
                                    <Link to="/inspectors">
                                        <div style={{borderRadius:'1vh',background:'rgba(100,100,100,0.5)',fontSize:'2vh',height:'6vh',lineHeight:'6vh',width:'70vw',color:'white',cursor: 'pointer',margin:5}}>Find an inspector</div>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <FooterBarMobile />
                    </div>
                </div>
                
                
            );
        } else {
            return (
                <div className="App" style={{width:"100%", margin:0, padding:0}}>
                    <Helmet>
                        <title>InspectWA</title>
                        <meta name="description" content="The Industry Association of Building and Property Inspectors in WA – Inspect WA. Inspect WA’s vision is to be Western Australia’s peak body representing professional independent building and property inspection businesses." />
                    </Helmet>
                    <div id="background" style={{width:"100%", }}>
                        <NavBar isAuthenticated={this.state.isAuthenticated} authHandler={this.authHandler}/>
                        <div style={this.styles.banner}>            
                            <img src={require("../../assets/images/logoActual.png")} style={{height:'30vh', marginTop:'20vh'}}></img>  
                            <br></br> 
                            <br></br> 
                            <br></br>
                            <div style={{ display: 'inline-block', width:'60vw'}}>
                                <p style={this.styles.bannerText}>
                                    Welcome to The Industry Association of Building and Property Inspectors in WA – Inspect WA. 
                                    Inspect WA’s vision is to be Western Australia’s peak body representing professional independent building and property inspection businesses.
                                </p>
                                <div style={{ display: 'inline-block', textDecoration:'none'}}>
                                    <Link to="/inspectors">
                                        <div style={this.styles.bannerButton}>Find an inspector</div>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <FooterBar />
                    </div>
                </div>
            );
        }
    }
     
    render() {
        return this.renderContent();
    }
}
 
export default Home;