import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom'

import { addtoken } from '../../actions/addtoken'
import { removetoken } from '../../actions/removetoken'


class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    } 

    styles = {
        bar: {
            width:'100%',
            background: 'rgb(60,60,60)',
            color: 'rgb(200,200,200)',
            height: '10vh',
            left: 0,
            position: 'fixed',
            top: 0,
            display:'flex',
            flexDirection:'row',
            zIndex:1000
        },
        headerLeft: {
            display:'flex',
            flexDirection:'row',
            float:'left',
            width:'40vw'
        },
        headerCenter: {
            display:'flex',
            flexDirection:'row',
            float:'left',
            width:0
        },
        headerRight: {
            display:'flex',
            flexDirection:'row',
            float:'right',
            width:'60vw'
        },
        headerLoginButton: {
            borderRadius:'1vh',
            background:'rgba(100,100,100)',
            fontSize:'2vh',
            height:'6vh',
            lineHeight:'6vh',
        },
        headerMemberButton: {
            borderRadius:'1vh',
            color:'rgba(100,100,100)',
            background: 'rgb(200,200,200)',
            fontSize:'2vh',
            height:'6vh',
            lineHeight:'6vh',
        },
        headerLink: {
            width:'10vw',
            cursor:'pointer',
            padding:'2vh',
            textDecoration: 'none'
        },
        headerLinkText: {
            fontSize:'2vh',
            lineHeight:'6vh',
            color: 'rgb(200,200,200)',
        },

    }

    render() { 
        return ( 
            <div style={this.styles.bar}>
                <div style={this.styles.headerLeft}>
                    <img src={require("../../assets/images/logoActual.png")} style={{height:'8vh', margin:'1vh'}}></img>
                </div>                
                <div style={this.styles.headerCenter}>
                </div>
                <div style={this.styles.headerRight}>
                    <Link to="/" style={this.styles.headerLink}>
                        <span style={this.styles.headerLinkText}>Home</span>
                    </Link>
                    <Link to="/about" style={this.styles.headerLink}>
                        <span style={this.styles.headerLinkText}>About</span>
                    </Link>
                    <Link to="/media" style={this.styles.headerLink}>
                        <span style={this.styles.headerLinkText}>Media</span>
                    </Link>
                    <Link to="/membership" style={this.styles.headerLink}>
                        <span style={this.styles.headerLinkText}>Join</span>
                    </Link>
                    <Link to="/ethics" style={this.styles.headerLink}>
                        <span style={this.styles.headerLinkText}>Ethics</span>
                    </Link>
                    <Link to="/contact" style={this.styles.headerLink}>
                        <span style={this.styles.headerLinkText}>Contact</span>
                    </Link>
                    <Link to="/members" style={this.styles.headerLink}>
                        <div style={this.styles.headerLoginButton}>                            
                            <span style={this.styles.headerLinkText}>
                                Members
                            </span>                            
                        </div>
                    </Link>
                </div>                    
            </div>
        );        
    }
}


export default withRouter(NavBar)