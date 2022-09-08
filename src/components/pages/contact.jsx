import React, { Component } from 'react';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";
import { Route, Link } from 'react-router-dom'
import Modal from "react-responsive-modal";

import NavBar from '../core/navBar'
import NavBarMobile from '../core/navBarMobile'

import FooterBar from '../core/footerBar'
import FooterBarMobile from '../core/footerBarMobile'




class Contact extends React.Component {
    constructor(props) {
        super(props);
        
        this.contactName = React.createRef();
        this.contactEmail = React.createRef();
        this.contactSubject = React.createRef();
  
        this.state = {
            isAuthenticated: false,
            open: false
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
            padding:10,
            paddingLeft:0, 
            paddingRight:0,
            fontSize:'1rem',
            lineHeight:'1rem',
            width:'60vw',
            marginLeft:'20vw',
        },
        formContainer: {
            width: '100%',
            borderRadius: 10,
            backgroundColor: 'rgba(100,100,100,0.4)',
            padding: 20
        },
        formInput: {
            width: '100%',
            color:'white',
            padding: 6,
            border: 'none',
            backgroundColor:'rgba(255,255,255,0.2)',
            borderRadius: 4,
            boxSizing: 'border-box',
            marginTop: 6,
            marginBottom: 16,
            resize: 'vertical',
        },
        formTextArea: {
            width: '100%',
            color:'white',
            padding: 6,
            border: 'none',
            backgroundColor:'rgba(255,255,255,0.2)',
            borderRadius: 4,
            boxSizing: 'border-box',
            marginTop: 6,
            marginBottom: 16,
            resize: 'vertical',
            height:100
        },
        formSubmit: {
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '12px 20px',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
            marginLeft: 'auto',
            marginRight: 'auto'
        }
        
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
            padding:10,
            paddingLeft:0, 
            paddingRight:0,
            paddingBottom:0,
            fontSize:'1rem',
            lineHeight:'1rem',
            width:'90vw',
            marginLeft:'5vw',
        },
        formContainer: {
            width: '100%',
            borderRadius: 10,
            backgroundColor: 'rgba(100,100,100,0.4)',
            padding: 20
        },
        formInput: {
            width: '100%',
            color:'white',
            padding: 6,
            border: 'none',
            backgroundColor:'rgba(255,255,255,0.2)',
            borderRadius: 4,
            boxSizing: 'border-box',
            marginTop: 6,
            marginBottom: 16,
            resize: 'vertical',
        },
        formTextArea: {
            width: '100%',
            color:'white',
            padding: 6,
            border: 'none',
            backgroundColor:'rgba(255,255,255,0.2)',
            borderRadius: 4,
            boxSizing: 'border-box',
            marginTop: 6,
            marginBottom: 16,
            resize: 'vertical',
            height:100
        },
        formSubmit: {
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '12px 20px',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
            marginLeft: 'auto',
            marginRight: 'auto'
        }
        
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };
    
    onCloseModal = () => {
        this.setState({ open: false });
    };

    contactSubmit = () => {
        const name = this.contactName.current.value;
        const email = this.contactEmail.current.value;
        const subject = this.contactSubject.current.value;

        fetch('https://inspectwaserver.azurewebsites.net/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                
                name: name,
                email: email,
                msg: subject,
            })
        })


        this.contactName.current.value = ''
        this.contactEmail.current.value = ''
        this.contactSubject.current.value = ''





        this.onOpenModal();
    }
    

    
    renderContent = () => {

        
        const { open } = this.state;

        if (isMobile) {
            return (
                
            <div className="App" style={{width:"100%", margin:0, padding:0}}>
                <div id="background" style={{width:"100%", }}>
                    <NavBarMobile isAuthenticated={this.state.isAuthenticated} authHandler={this.authHandler}/>

                    <div>    
                        <div style={this.mobileStyles.BodySection}>
                            <h1 style={this.mobileStyles.BodySectionHeaderText}>
                                Contact us
                            </h1>
                            <div style={this.mobileStyles.BodySectionTextDiv}>
                                
                                <div style={this.mobileStyles.formContainer}>
                                    <label for="name">Full Name</label>
                                    <input style={this.mobileStyles.formInput} ref={this.contactName} type="text" id="name" name="firstname" placeholder="Your name.." />

                                    <label for="email">Email Address</label>
                                    <input style={this.mobileStyles.formInput} ref={this.contactEmail} type="text" id="lname" name="email" placeholder="Your email address.."/>

                                    <label for="subject">Subject</label>
                                    <br></br>
                                    <textarea style={this.mobileStyles.formTextArea} ref={this.contactSubject} id="subject" name="subject" placeholder="Write something.."></textarea>

                                    <br></br>
                                    <div style={{width:'100%', textAlign:'center'}}>
                                        <input style={this.mobileStyles.formSubmit} onClick={this.contactSubmit} type="submit" value="Submit"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Modal open={open} styles={{backgroundColor:'rgb(20,20,20)'}} onClose={this.onCloseModal} center={true} >
                            <div style={{padding:20, textAlign:'center'}}>
                                <br></br>
                                <p>
                                    Your message has been sent successfully. We will be in contact shortly via email. 
                                </p>
                                <br></br>
                                <a onClick={this.onCloseModal} style={this.styles.formSubmit}>
                                    <span>Ok</span>
                                </a>
                            </div>
                        </Modal>
                    </div>

                    <FooterBarMobile />
                </div>    
            </div>
                
                
            );
        } else {
            return (                
                
                <div className="App" style={{width:"100%", margin:0, padding:0}}>
                    <div id="background" style={{width:"100%", }}>
                        <NavBar isAuthenticated={this.state.isAuthenticated} authHandler={this.authHandler}/>

                        <div>    
                            <div style={this.styles.BodySection}>
                                <h1 style={this.styles.BodySectionHeaderText}>
                                    Contact InspectWA
                                </h1>
                                <div style={this.styles.BodySectionTextDiv}>
                                    
                                    <div style={this.styles.formContainer}>
                                        <label for="name">Full Name</label>
                                        <input style={this.styles.formInput} type="text" ref={this.contactName} placeholder="Your name.." />

                                        <label for="email">Email Address</label>
                                        <input style={this.styles.formInput} type="text" ref={this.contactEmail} placeholder="Your email address.."/>

                                        <label for="subject">Subject</label>
                                        <br></br>
                                        <textarea style={this.styles.formTextArea}  ref={this.contactSubject} placeholder="Write something.."></textarea>

                                        <br></br>
                                        <div style={{width:'100%', textAlign:'center', padding:10}}>
                                            <a onClick={this.contactSubmit} style={this.styles.formSubmit}>
                                                <span>Submit</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Modal open={open} styles={{backgroundColor:'rgb(20,20,20)'}} onClose={this.onCloseModal} center={true} >
                                <div style={{padding:20, textAlign:'center'}}>
                                    <br></br>
                                    <p>
                                        Your message has been sent successfully. We will be in contact shortly via email. 
                                    </p>
                                    <br></br>
                                    <a onClick={this.onCloseModal} style={this.styles.formSubmit}>
                                        <span>Ok</span>
                                    </a>
                                </div>
                            </Modal>
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
export default Contact

