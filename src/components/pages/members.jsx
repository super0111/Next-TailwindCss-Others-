import React, { Component } from 'react';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";
import { Route, Link } from 'react-router-dom'
import firebase from '../../Firebase'

import NavBar from '../core/navBar'
import NavBarMobile from '../core/navBarMobile'

import FooterBar from '../core/footerBar'
import FooterBarMobile from '../core/footerBarMobile'

import Loading from '../../components/loading.js'

import './members.css'

import paper1 from '../../assets/files/private/Position Paper 1 2019 Delignification of Roof Tile Battens Approved.pdf'
import paper2 from '../../assets/files/private/Position Paper 2 2019 Elevated Moisture Levels in Masonay Walls Approve.._.pdf'
import paper3 from '../../assets/files/private/Position Paper 3 2019 Pre Purchase Builing Insepction Report.._.pdf'

import paper6 from '../../assets/files/private/Position Paper 6 2019 Sagging ceilings.pdf'
import paper7 from '../../assets/files/private/Position Paper 7 Party and Firewalls Final.pdf'

import paper8 from '../../assets/files/private/Position Paper 8 DownLighting & Insulation.pdf'
import paper9 from '../../assets/files/private/Position Paper 9 Texture Rendered Finishes as an Alternative to Weep holes.pdf'

import paper11 from '../../assets/files/private/11 Pre Purchase Inspection Report.pdf'
import paper12 from '../../assets/files/private/12 Structural Defects Notices.pdf'
import paper13 from '../../assets/files/private/13 Defining Residential Buildings.pdf'

import paper14 from '../../assets/files/private/14 RCDs Smoke Alarms Electrical Testing.pdf'
import paper15 from '../../assets/files/private/15 InspectWA Responds to CRIS Reforms.pdf'

import paper16 from '../../assets/files/private/16 Wet Area Waterproofing CPD Presentation.pdf'

import paper17 from '../../assets/files/private/17 Roof Leaks and Structural Damage.pdf'
import paper18 from '../../assets/files/private/18 InspectWA Position Paper.pdf'

import paper19 from '../../assets/files/private/19 Pre purchase structural inspections.pdf'
import paper20 from '../../assets/files/private/20 Tie Downs Part 1.pdf'

import paper21 from '../../assets/files/private/21 Tie Downs Part 2.pdf'

import paper22 from '../../assets/files/private/22 Tile Presentation.pdf'

import paper23 from '../../assets/files/private/23 Logo Policy.pdf'

import paper24 from '../../assets/files/private/24 Pre Purchase Building Inspection Annexures.pdf'

import paper25 from '../../assets/files/private/25 Restricted access.pdf'



class Members extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isAuthenticated: false,
            loadingVisible: false,
            email: '', 
            password: '',
            changePasswordVisible: false,
            passwordNew1:'',
            passwordNew2:''
        }  
    } 
  
    
    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }
    
    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    changePasswordShow = () => {
        this.setState({
            changePasswordVisible:true
        })
    }

    changePasswordHide = () => {
        this.setState({
            changePasswordVisible:false
        })
    }

    onPasswordNew1Change = (event) => {
        this.setState({passwordNew1: event.target.value})
    }
    
    onPasswordNew2Change = (event) => {
        this.setState({passwordNew2: event.target.value})
    }
    
    mobileStyles = {
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
            width:'90vw',
            marginLeft:'5vw',
        },
        membersContainer: {
            width: '100%',
        },
        calendarContainer: {
            width: '90%',
            margin:'5%',
            marginTop:20,
            textAlign:'center',
            
        },
        docLibraryContainer: {
            width: '90%',
            margin:'5%',
            marginTop:20,
            textAlign:'center'
        },

        
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
            width:'90vw',
            marginLeft:'5vw',
        },
        membersContainer: {
            width: '100%',
            borderRadius: 10,
            backgroundColor: 'rgba(100,100,100,0.2)',
            display:'flex',
        },
        calendarContainer: {
            width: '40%',
            margin:'5%',
            marginTop:20,
            textAlign:'center',
            
        },
        docLibraryContainer: {
            width: '40%',
            margin:'5%',
            marginTop:20,
            textAlign:'center'
        },

        
    }

    handleClick = (msg) => {
        console.log("clicked");
        alert('clicked');        
        alert(msg);
    }

    renderLoader = () => {
        if(this.state.loadingVisible) {
            return(
                <Loading />
            )
        } else {
            return null;
        }
    }

    submitLogin = () => {
        const that = this;
        this.setState({loadingVisible:true});

        //Make the Firebase call
        let ref = firebase.database().ref('/');
        ref.on('value', function(snapshot) {
            let authCheck = false;            
            let dataObj = snapshot.val();
            for(var i = 0; i < dataObj.users.length; i++) {
                try {
                    if((that.state.email === dataObj.users[i].email) && (that.state.password === dataObj.users[i].password)) {
                        that.setState({
                            loadingVisible: false, 
                            isAuthenticated: true
                        })
                    }
                } catch(e) {}
            }
            setTimeout(function(){ 
                that.setState({
                    loadingVisible: false
                })
                if(that.state.isAuthenticated == false) {
                    alert('Credentials are incorrect, please try again.')
                } 
            }, 2000);
        }); 
    }

    

    submitChangePassword = () => {
        const that = this;
        if((this.state.passwordNew1 === this.state.passwordNew2) && (this.state.passwordNew1 !== '')) {
            this.setState({loadingVisible:true});

            //Make the Firebase call
            let ref = firebase.database().ref('/');
            ref.on('value', function(snapshot) {
                let dataObj = snapshot.val();
                var originalObj = dataObj.users
                var newObj = dataObj.users
                for(var i = 0; i < originalObj.length; i++) {
                    if((that.state.email === originalObj[i].email) && (that.state.password === originalObj[i].password)) {
                        newObj[i].password = that.state.passwordNew1 
                        alert('Password has successfully been changed')
                        //Send to database and wrap up
                        firebase.database().ref('/users').set(newObj)
                        that.setState({
                            loadingVisible: false, 
                            isAuthenticated: true
                        })
                    }
                }
                setTimeout(function(){ 
                    that.setState({
                        loadingVisible: false
                    })
                    if(that.state.isAuthenticated == false) {
                        alert('Existing email and password is incorrect, please try again.')
                    } 
                }, 2000);
            }); 
        } else {
            alert('Your new password fields do not match, please ensure they are the same and resubmit.')
        }        
    }
    
    
    renderContent = () => {
        if(!isMobile) {
            if(!this.state.isAuthenticated) {
                if(this.state.changePasswordVisible) {
                    return (
                        <div>                        
                            <div style={{backgroundColor:'rgba(0,0,0,0.6)', zIndex:20, height:'90vh', marginTop:'10vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                <div style={{width:'30%',}}> 
                                
                                    <img src={require("../../assets/images/logoActual.png")} style={{width:'100%'}}></img>
                                                                    
                                    <span style={{color:'white', fontSize:18,}}>
                                        Complete the form below to change your password
                                    </span>
                                    <br />
                                    <br />
        
                                    <span style={{color:'white'}}>
                                        Email:
                                    </span>
                                    <br />
                                    <input 
                                        onChange={this.onEmailChange.bind(this)}
                                        style={{backgroundColor:'white', borderRadius:5,border:'none', textIndent:10, padding:5, width:'100%'}} 
                                        type="text"
                                        placeholder="Your email.." />
                                    <br />
                                    <br />  
                                    <span style={{color:'white'}}>
                                        Old password:
                                    </span>
                                    <br />
                                    <input 
                                        onChange={this.onPasswordChange.bind(this)}
                                        style={{backgroundColor:'white', borderRadius:5,border:'none', textIndent:10, padding:5, width:'100%'}} 
                                        type="password"
                                        placeholder="Your password.." />
                                    <br />
                                    <br />  
                                    <span style={{color:'white'}}>
                                        New password:
                                    </span>
                                    <br />
                                    <input 
                                        onChange={this.onPasswordNew1Change.bind(this)}
                                        style={{backgroundColor:'white', borderRadius:5,border:'none', textIndent:10, padding:5, width:'100%'}} 
                                        type="password"
                                        placeholder="New password.." />
                                    <br />
                                    <br />  
                                    <span style={{color:'white'}}>
                                        Retype new password:
                                    </span>
                                    <br />
                                    <input 
                                        onChange={this.onPasswordNew2Change.bind(this)}
                                        style={{backgroundColor:'white', borderRadius:5,border:'none', textIndent:10, padding:5, width:'100%'}} 
                                        type="password"
                                        placeholder="Retype new password.." />
                                    <br />
                                    <br />
                                    
                                    <div style={{display:'flex', flexDirection:'row'}}>
                                        <div style={{display:'flex', flex:1, textAlign:'center', justifyContent:'center'}}>
                                            <div 
                                                style={{padding:10, backgroundColor:'#4CAF50', borderRadius:5, color:'white', width:'80%', cursor:'pointer'}} 
                                                onClick={this.submitChangePassword} >                         
                                                <span style={{color:'white'}}>
                                                    Confirm
                                                </span>
                                            </div>
                                        </div>
                                        <div style={{display:'flex', flex:1, textAlign:'center', justifyContent:'center'}}>
                                            <div 
                                                style={{padding:10, backgroundColor:'#e74c3c', borderRadius:5, color:'white', width:'80%', cursor:'pointer'}} 
                                                onClick={this.changePasswordHide} >                         
                                                <span style={{color:'white'}}>
                                                    Cancel
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
        
                            </div>                
                            <div className="App" style={{width:"100%", margin:0, padding:0}}>
                                <div id="background" style={{width:"100%", }}>
                                    <NavBar />
            
                                    <FooterBar />
                                </div>    
                            </div>
                        </div>                
                    );
                } else {
                    return (
                        <div>                        
                            <div style={{backgroundColor:'rgba(0,0,0,0.6)', zIndex:20, height:'90vh', marginTop:'10vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                <div style={{width:'30%',}}> 
                                
                                    <img src={require("../../assets/images/logoActual.png")} style={{width:'100%'}}></img>
                                                                    
                                    <span style={{color:'white', fontSize:18,}}>
                                        Please login to access the members section
                                    </span>
                                    <br />
                                    <br />
        
                                    <span style={{color:'white'}}>
                                        Email:
                                    </span>
                                    <br />
                                    <input 
                                        onChange={this.onEmailChange.bind(this)}
                                        style={{backgroundColor:'white', borderRadius:5,border:'none', textIndent:10, padding:5, width:'100%'}} 
                                        type="text"
                                        placeholder="Your email.." />
                                    <br />
                                    <br />  
                                    <span style={{color:'white'}}>
                                        Password:
                                    </span>
                                    <br />
                                    <input 
                                        onChange={this.onPasswordChange.bind(this)}
                                        style={{backgroundColor:'white', borderRadius:5,border:'none', textIndent:10, padding:5, width:'100%'}} 
                                        type="password"
                                        placeholder="Your password.." />
                                    <br />
                                    <br />
                                    
                                    <div style={{width:'100%', textAlign:'center', display:'flex', justifyContent:'center'}}>
                                        <div 
                                            style={{padding:5, backgroundColor:'rgb(52,152,219)', borderRadius:5, color:'white', width:'40%', cursor:'pointer'}} 
                                            onClick={this.changePasswordShow} >                         
                                            <span style={{color:'white'}}>
                                                Change password
                                            </span>
                                        </div>
                                    </div>
                                    <br />
                                    
                                    <div style={{width:'100%', textAlign:'center', display:'flex', justifyContent:'center'}}>
                                        <div 
                                            style={{padding:10, backgroundColor:'#4CAF50', borderRadius:5, color:'white', width:'40%', cursor:'pointer'}} 
                                            onClick={this.submitLogin} >                         
                                            <span style={{color:'white'}}>
                                                Submit
                                            </span>
                                        </div>
                                    </div>
                                </div>
        
                            </div>                
                            <div className="App" style={{width:"100%", margin:0, padding:0}}>
                                <div id="background" style={{width:"100%", }}>
                                    <NavBar />
            
                                    <FooterBar />
                                </div>    
                            </div>
                        </div>                
                    );

                }
                
            } else {            
                return (                
                    <div className="App" style={{width:"100%", margin:0, padding:0}}>
                        <div id="background" style={{width:"100%", }}>
                            <NavBar isAuthenticated={this.state.isAuthenticated} authHandler={this.authHandler}/>

                            <div>    
                                <div style={this.styles.BodySection}>
                                    <h1 style={this.styles.BodySectionHeaderText}>
                                        InspectWA members area
                                    </h1>
                                    <div style={this.styles.BodySectionTextDiv}>
                                        
                                        <div style={this.styles.membersContainer}>
                                            <div style={this.styles.calendarContainer}>
                                                <h3>
                                                    Events Calendar
                                                </h3>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Event</th>
                                                            <th>Date</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Members Forum - Tiling</td>
                                                            <td>23 February 2021</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Members Forum - Cavity Walls and Water Ingress</td>
                                                            <td>22 September 2020</td>
                                                        </tr>
                                                        <tr>
                                                            <td>AGM</td>
                                                            <td>July 2020</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Members Forum - Waterpoofing and various</td>
                                                            <td>26 May 2020</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Structerre Framing World</td>
                                                            <td>25 February 2020</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Members Forum - Windows and various</td>
                                                            <td>27 November 2019</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Members Forum - REIWA and various</td>
                                                            <td>24 September 2019</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Inaugural AGM</td>
                                                            <td>28 May 2019</td>
                                                        </tr>
                                                    </tbody>
                                                    
                                                </table>

                                            </div>
                                            <div style={this.styles.docLibraryContainer}>
                                                <h3>
                                                    Document library
                                                </h3>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Document</th>
                                                            <th>Date modified</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <a rel="noopener noreferrer" target='_blank' href={paper25} style={{textDecoration:'none'}}>
                                                                    <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                    Restricted access
                                                                    </span>
                                                                </a>
                                                            </td>
                                                            <td>8th May 2022</td>
                                                            <td>Final</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a rel="noopener noreferrer" target='_blank' href={paper24} style={{textDecoration:'none'}}>
                                                                    <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                    Pre Purchase Building Inspection Annexures
                                                                    </span>
                                                                </a>
                                                            </td>
                                                            <td>1st May 2021</td>
                                                            <td>Final</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a rel="noopener noreferrer" target='_blank' href={paper23} style={{textDecoration:'none'}}>
                                                                    <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                    Logo policy
                                                                    </span>
                                                                </a>
                                                            </td>
                                                            <td>23rd April 2021</td>
                                                            <td>Final</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a rel="noopener noreferrer" target='_blank' href={paper21} style={{textDecoration:'none'}}>
                                                                    <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                    Tie Downs - Part 2
                                                                    </span>
                                                                </a>
                                                            </td>
                                                            <td>8th March 2021</td>
                                                            <td>Final</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a rel="noopener noreferrer" target='_blank' href={paper22} style={{textDecoration:'none'}}>
                                                                    <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                    Tile presentation
                                                                    </span>
                                                                </a>
                                                            </td>
                                                            <td>1st March 2021</td>
                                                            <td>Final</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a rel="noopener noreferrer" target='_blank' href={paper14} style={{textDecoration:'none'}}>
                                                                    <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                        RCDs Smoke Alarms Electrical Testing
                                                                    </span>
                                                                </a>
                                                            </td>
                                                            <td>19th November 2020</td>
                                                            <td>Final</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a rel="noopener noreferrer" target='_blank' href={paper20} style={{textDecoration:'none'}}>
                                                                    <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                    Tie Downs - Part 1
                                                                    </span>
                                                                </a>
                                                            </td>
                                                            <td>25th October 2020</td>
                                                            <td>Final</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a rel="noopener noreferrer" target='_blank' href={paper19} style={{textDecoration:'none'}}>
                                                                    <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                        Pre purchase structural inspections
                                                                    </span>
                                                                </a>
                                                            </td>
                                                            <td>16th August 2020</td>
                                                            <td>Final</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a rel="noopener noreferrer" target='_blank' href={paper18} style={{textDecoration:'none'}}>
                                                                    <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                        Restricted Access
                                                                    </span>
                                                                </a>
                                                            </td>
                                                            <td>15th July 2020</td>
                                                            <td>Final</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a rel="noopener noreferrer" target='_blank' href={paper17} style={{textDecoration:'none'}}>
                                                                    <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                        Roof Leaks and Structural Damage
                                                                    </span>
                                                                </a>
                                                            </td>
                                                            <td>15th July 2020</td>
                                                            <td>Final</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a rel="noopener noreferrer" target='_blank' href={paper16} style={{textDecoration:'none'}}>
                                                                    <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                        Wet Area Waterproofing CPD Presentation
                                                                    </span>
                                                                </a>
                                                            </td>
                                                            <td>26th May 2020</td>
                                                            <td>Final</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a rel="noopener noreferrer" target='_blank' href={paper15} style={{textDecoration:'none'}}>
                                                                    <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                        InspectWA Responds to CRIS Reforms
                                                                    </span>
                                                                </a>
                                                            </td>
                                                            <td>26th May 2020</td>
                                                            <td>Final</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a rel="noopener noreferrer" target='_blank' href={paper13} style={{textDecoration:'none'}}>
                                                                    <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                        Defining Residential Buildings
                                                                    </span>
                                                                </a>
                                                            </td>
                                                            <td>20th April 2020</td>
                                                            <td>Final</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a rel="noopener noreferrer" target='_blank' href={paper12} style={{textDecoration:'none'}}>
                                                                    <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                        Structural Defects Notices
                                                                    </span>
                                                                </a>
                                                            </td>
                                                            <td>20th April 2020</td>
                                                            <td>Final</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a rel="noopener noreferrer" target='_blank' href={paper11} style={{textDecoration:'none'}}>
                                                                    <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                        Pre Purchase Inspection Report
                                                                    </span>
                                                                </a>
                                                            </td>
                                                            <td>20th April 2020</td>
                                                            <td>Final</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a rel="noopener noreferrer" target='_blank' href={paper8} style={{textDecoration:'none'}}>
                                                                    <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                        Downlighting & Insulation
                                                                    </span>
                                                                </a>
                                                            </td>
                                                            <td>23rd March 2020</td>
                                                            <td>Final</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a rel="noopener noreferrer" target='_blank' href={paper9} style={{textDecoration:'none'}}>
                                                                    <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                        Rendered Finishes as an Alternative to Weep holes
                                                                    </span>
                                                                </a>
                                                            </td>
                                                            <td>23rd March 2020</td>
                                                            <td>Final</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a rel="noopener noreferrer" target='_blank' href={paper6} style={{textDecoration:'none'}}>
                                                                    <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                        Sagging ceilings
                                                                    </span>
                                                                </a>
                                                            </td>
                                                            <td>30th November 2019</td>
                                                            <td>Final</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a rel="noopener noreferrer" target='_blank' href={paper7} style={{textDecoration:'none'}}>
                                                                    <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                        Party and Firewalls
                                                                    </span>
                                                                </a>
                                                            </td>
                                                            <td>30th November 2019</td>
                                                            <td>Final</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a rel="noopener noreferrer" target='_blank' href={paper1} style={{textDecoration:'none'}}>
                                                                    <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                        Dilignification of Tile Battens
                                                                    </span>
                                                                </a>
                                                            </td>
                                                            <td>10th October 2019</td>
                                                            <td>Final</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a rel="noopener noreferrer" target='_blank' href={paper2} style={{textDecoration:'none'}}>
                                                                    <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                        Moisture in masonary walls
                                                                    </span>
                                                                </a>
                                                            </td>
                                                            <td>10th October 2019</td>
                                                            <td>Final</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a rel="noopener noreferrer" target='_blank' href={paper3} style={{textDecoration:'none'}}>
                                                                    <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                        Pre Purchase inspection clarity
                                                                    </span>
                                                                </a>
                                                            </td>
                                                            <td>10th October 2019</td>
                                                            <td>Final</td>
                                                        </tr>
                                                    </tbody>
                                                    
                                                </table>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <FooterBar />
                        </div>    
                    </div>
                    
                    
                );
                
            }
        } else {
            return (
                <div className="App" style={{width:"100%", margin:0, padding:0}}>
                    <div id="background" style={{width:"100%", }}>
                        <NavBarMobile isAuthenticated={this.state.isAuthenticated} authHandler={this.authHandler}/>
                        <div style={{width:'100%',height: '100vh',contentAlign: 'center',textAlign: 'center'}}>   
                            <img src={require("../../assets/images/logoActual.png")} style={{width:'80vw', marginTop:'20vh'}}></img>
                            <br></br> 
                            <br></br>
                            <div style={{ display: 'inline-block', width:'90vw'}}>
                                <p style={{fontSize:'2vh',color:'rgb(220,220,220)',cursor: 'pointer'}}>
                                    The members section is not available on mobile devices. Please use a desktop computer to access this section.    
                                </p>
                                
                            </div>
                        </div>
                        <FooterBarMobile />
                    </div>
                </div>
                
                
            );
        
        }
        
    }
     
    render() {
        return (
            <div>
                {this.renderLoader()}
                {this.renderContent()}
            </div>
        )
    }

  
}
export default Members

