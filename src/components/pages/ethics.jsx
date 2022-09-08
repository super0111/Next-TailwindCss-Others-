import React, { Component } from 'react';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";
import { Route, Link } from 'react-router-dom'


import {Helmet} from 'react-helmet'

import NavBar from '../core/navBar'
import NavBarMobile from '../core/navBarMobile'

import FooterBar from '../core/footerBar'
import FooterBarMobile from '../core/footerBarMobile'




class Ethics extends React.Component {
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
            marginTop:'10vh'
        },
        BodySection: {
            backgroundColor:'rgba(0,0,0,0.2)',
            marginTop:'10vh',
            minHeight:'90vh'
        },
        BodySectionHeaderText: {
            color:'rgb(220,220,220)',
            padding:20
        },
        BodySectionTextDiv: {
            color:'rgb(255,255,255)',
            textAlign:'left',
            fontSize:'1rem',
            lineHeight:'1.2rem',
            width:'80vw',
            marginLeft:'10vw',
        },
        ethicsContainer: {
            width: '100%',
            borderRadius: 10,
            backgroundColor: 'rgba(100,100,100,0.2)',
            padding: 20
        },
        
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

                        <div>    
                            <div style={this.styles.BodySection}>
                                <h1 style={this.styles.BodySectionHeaderText}>
                                    Code of ethics
                                </h1>
                                <div style={{color:'rgb(255,255,255)',textAlign:'left',fontSize:'0.8rem',lineHeight:'1rem',width:'90vw',marginLeft:'5vw',}}>
                                    
                                    <div style={this.styles.ethicsContainer}>                 
                                        <div style={{textAlign:'center'}}>
                                            <img style={{height:'20vh'}} src={require('../../assets/icons/open-book.png')} />
                                        </div>                   

                                        <p>
                                            1.	A member shall act in an impartial, honest manner and in the interest of their clients.
                                        </p>
                                        <p>
                                            2.	A member shall not offer services or express opinions beyond their capabilities and qualifications. Members should disclose their experience, qualifications and or Registrations in their engagement documentation and reports so as to demonstrate the validity of their opinions and capabilities.
                                        </p>
                                        <p>
                                            3.	A member should do their utmost to avoid a conflict of interest and shall disclose a conflict of interest with a client as soon as that conflict becomes apparent.
                                        </p>
                                        <p>
                                            4.	The members should not offer or receive commissions or payment from any party other than the client in conjunction with an inspection of a property. 
                                        </p>
                                        <p>
                                            5.	A member shall not make an un-solicited offer to undertake remediation work identified and recommended in their report. 
                                        </p>
                                        <p>
                                            6.	A member shall not accept payment from a contractor for the referral of remediation work identified and recommended in their report.
                                        </p>
                                        <p>
                                            7.	A member should disclosure to their clients the status of all Professional Indemnity, Public Liability and Workers Compensation insurances prior to being engaged by that client so that the client can make an informed decision. 

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <br></br>
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

                        <div>    
                            <div style={this.styles.BodySection}>
                                <h1 style={this.styles.BodySectionHeaderText}>
                                    InspectWA code of ethics
                                </h1>
                                <div style={this.styles.BodySectionTextDiv}>
                                    
                                    <div style={this.styles.ethicsContainer}>                 
                                        <div style={{textAlign:'center'}}>
                                            <img style={{height:'20vh', margin:'5vh'}} src={require('../../assets/icons/open-book.png')} />
                                        </div>                   

                                        <p>
                                            1.	A member shall act in an impartial, honest manner and in the interest of their clients.
                                        </p>
                                        <p>
                                            2.	A member shall not offer services or express opinions beyond their capabilities and qualifications. Members should disclose their experience, qualifications and or Registrations in their engagement documentation and reports so as to demonstrate the validity of their opinions and capabilities.
                                        </p>
                                        <p>
                                            3.	A member should do their utmost to avoid a conflict of interest and shall disclose a conflict of interest with a client as soon as that conflict becomes apparent.
                                        </p>
                                        <p>
                                            4.	The members should not offer or receive commissions or payment from any party other than the client in conjunction with an inspection of a property. 
                                        </p>
                                        <p>
                                            5.	A member shall not make an un-solicited offer to undertake remediation work identified and recommended in their report. 
                                        </p>
                                        <p>
                                            6.	A member shall not accept payment from a contractor for the referral of remediation work identified and recommended in their report.
                                        </p>
                                        <p>
                                            7.	A member should disclosure to their clients the status of all Professional Indemnity, Public Liability and Workers Compensation insurances prior to being engaged by that client so that the client can make an informed decision. 

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <br></br>
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
export default Ethics

