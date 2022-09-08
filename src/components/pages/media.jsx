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

import './media.css'

import paper1 from '../../assets/files/public/Inspect WA Press Release Sept 2019 .pdf'
import paper2 from '../../assets/files/public/Delignification of Tile Battens.pdf'
import paper3 from '../../assets/files/public/Elevated Moisture in Walls.pdf'
import paper4 from '../../assets/files/public/Clarity in Pre Purchase Building Inspection Reports.pdf'

import paper6 from '../../assets/files/public/Sagging ceilings.pdf'
import paper7 from '../../assets/files/public/Party Walls.pdf'

import paper8 from '../../assets/files/public/Downlighting & Insulation.pdf'
import paper9 from '../../assets/files/public/Rendered Finishes as an Alternative to Weep holes.pdf'

import paper10 from '../../assets/files/public/Open Letter to The Minister.pdf'

import paper11 from '../../assets/files/public/11 Pre Purchase Inspection Report.pdf'
import paper12 from '../../assets/files/public/12 Structural Defects Notices.pdf'
import paper13 from '../../assets/files/public/13 Defining Residential Buildings.pdf'

import paper14 from '../../assets/files/public/14 RCDs Smoke Alarms Electrical Testing.pdf'

import paper17 from '../../assets/files/public/17 Roof Leaks and Structural Damage.pdf'
import paper18 from '../../assets/files/public/18 InspectWA Position Paper.pdf'

import paper19 from '../../assets/files/public/19 Pre purchase structural inspections.pdf'
import paper20 from '../../assets/files/public/20 Tie Downs Part 1.pdf'

import paper21 from '../../assets/files/public/21 Tie Downs Part 2.pdf'

import paper24 from '../../assets/files/public/24 Pre Purchase Building Inspection Annexures.pdf'

import paper25 from '../../assets/files/public/25 Restricted access.pdf'




class Members extends React.Component {
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
            textAlign:'center',
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
        docLibraryContainer: {
            width: '60%',
            marginLeft:'20%',
            marginTop:20,
            textAlign:'center'
        },

        
    }

    handleClick = (msg) => {
        console.log("clicked");
        alert('clicked');        
        alert(msg);
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

                            <div style={this.mobileStyles.BodySection}>
                                <h1 style={this.mobileStyles.BodySectionHeaderText}>
                                    Media
                                </h1>
                                <div style={this.mobileStyles.BodySectionTextDiv}>
                                    
                                    <div style={this.mobileStyles.docLibraryContainer}>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Document</th>
                                                    <th>Date modified</th>
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
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a rel="noopener noreferrer" target='_blank' href={paper10} style={{textDecoration:'none'}}>
                                                            <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                Economic stimulus during COVID-19
                                                            </span>
                                                        </a>
                                                    </td>
                                                    <td>24th March 2020</td>
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
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a rel="noopener noreferrer" target='_blank' href={paper9} style={{textDecoration:'none'}}>
                                                            <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                Rendered Finishes as an alternative to Weep holes
                                                            </span>
                                                        </a>
                                                    </td>
                                                    <td>23rd March 2020</td>
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
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a rel="noopener noreferrer" target='_blank' href={paper2} style={{textDecoration:'none'}}>
                                                            <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                Delignification of Tile Battens
                                                            </span>
                                                        </a>
                                                    </td>
                                                    <td>11th October 2019</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a rel="noopener noreferrer" target='_blank' href={paper3} style={{textDecoration:'none'}}>
                                                            <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                Elevated Moisture in Walls
                                                            </span>
                                                        </a>
                                                    </td>
                                                    <td>11th October 2019</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a rel="noopener noreferrer" target='_blank' href={paper4} style={{textDecoration:'none'}}>
                                                            <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                Clarity in Pre Purchase Building Inspection Reports
                                                            </span>
                                                        </a>
                                                    </td>
                                                    <td>11th October 2019</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a rel="noopener noreferrer" target='_blank' href={paper1} style={{textDecoration:'none'}}>
                                                            <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                Press Release
                                                            </span>
                                                        </a>
                                                    </td>
                                                    <td>21st September 2019</td>
                                                </tr>
                                            </tbody>
                                            
                                        </table>

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

                        <div>    
                            <div style={this.styles.BodySection}>
                                <h1 style={this.styles.BodySectionHeaderText}>
                                    InspectWA Media library
                                </h1>
                                <div style={this.styles.BodySectionTextDiv}>
                                        
                                    <div style={this.styles.docLibraryContainer}>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Document</th>
                                                    <th>Date released</th>
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
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a rel="noopener noreferrer" target='_blank' href={paper10} style={{textDecoration:'none'}}>
                                                            <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                Economic stimulus during COVID-19
                                                            </span>
                                                        </a>
                                                    </td>
                                                    <td>24th March 2020</td>
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
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a rel="noopener noreferrer" target='_blank' href={paper9} style={{textDecoration:'none'}}>
                                                            <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                Rendered Finishes as an alternative to Weep holes
                                                            </span>
                                                        </a>
                                                    </td>
                                                    <td>23rd March 2020</td>
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
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a rel="noopener noreferrer" target='_blank' href={paper2} style={{textDecoration:'none'}}>
                                                            <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                Delignification of Tile Battens
                                                            </span>
                                                        </a>
                                                    </td>
                                                    <td>11th October 2019</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a rel="noopener noreferrer" target='_blank' href={paper3} style={{textDecoration:'none'}}>
                                                            <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                Elevated Moisture in Walls
                                                            </span>
                                                        </a>
                                                    </td>
                                                    <td>11th October 2019</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a rel="noopener noreferrer" target='_blank' href={paper4} style={{textDecoration:'none'}}>
                                                            <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                Clarity in Pre Purchase Building Inspection Reports
                                                            </span>
                                                        </a>
                                                    </td>
                                                    <td>11th October 2019</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a rel="noopener noreferrer" target='_blank' href={paper1} style={{textDecoration:'none'}}>
                                                            <span style={{textDecorationColor:'rgba(0,0,0,0)', color:'white'}}>
                                                                Press Release
                                                            </span>
                                                        </a>
                                                    </td>
                                                    <td>21st September 2019</td>
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
                
                
            );
        }
    }
     
    render() {
        return this.renderContent();
    }

  
}
export default Members

