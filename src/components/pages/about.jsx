import React from 'react';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";
import {Helmet} from 'react-helmet'

import NavBar from '../core/navBar'
import NavBarMobile from '../core/navBarMobile'

import FooterBar from '../core/footerBar'
import FooterBarMobile from '../core/footerBarMobile'



class About extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            isAuthenticated: this.props.isAuthenticated
        }
  
        this.authHandler = this.authHandler.bind(this)
    } 
  
    
    authHandler(newValue) {
        this.setState({
          isAuthenticated: newValue
        })
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
    
                        <div style={{marginTop:'10vh'}}>    
                            <div style={{height:'50vh', width:'90vw', marginLeft:'5vw', fontSize:30, display: 'grid', placeItems: 'center center'}}>
                                <img style={{height:'30vh', marginTop:'20vh'}} src={require('../../assets/icons/check-mark.png')} />
                            </div>
                            <div style={{height:'30vh', width:'90vw', marginLeft:'5vw', fontSize:30, display: 'grid', placeItems: 'center center'}}>
                                <p style={{fontSize:20, fontStyle:'italic', color:'rgb(220,220,220)'}}>
                                    Our vision is to be WA’s peak body representing professional independent building and property inspection businesses.
                                </p>
                            </div>
                            <div style={{height:'20vh'}}>
                            </div>
                            
    
                            
                            <div style={{backgroundColor:'rgba(255,255,255,0.5)', padding:20, textAlign:'center', contentAlign:'center'}}>
                                <h1 style={{color:'rgb(40,40,40)'}}>
                                    Our team
                                </h1>
                                <p style={{textAlign:'left', color:'rgb(40,40,40)', fontSize:16, width:'100%'}}>
                                    Building Inspectors within the association must now be a WA registered builders as a minimum. Applications from engineers and or builder surveyors are encouraged where applicants demonstrate active involvement in WA building inspections . Association inspectors cover Perth & Regional WA.
                                </p>
                                <div style={{flex:1, display: 'grid', placeItems: 'center center', padding:30}}>                                                                                                           
                                    <img style={{height:'30vh'}} src={require('../../assets/icons/placeholder.png')} />  
                                </div>
                                
                                
                                
                                
    
                            </div>
    
    
                            <div style={{backgroundColor:'rgba(0,0,0,0.4)', padding:20}}>
                                <h1 style={{color:'white'}}>
                                    Industry leaders
                                </h1>
                                <br></br>
                                <div style={{flex:1, display: 'grid', placeItems: 'center center'}}>                                    
                                    <img style={{height:'30vh'}} src={require('../../assets/icons/seminar.png')} />
                                </div>  
                                <p style={{textAlign:'left', color:'white', fontSize:16}}>
                                    We provide thought leadership on key issues impacting the building and property inspection industry and promote those considered views in key forums. We aim to lead by example through our professionalism and safety in the inspection industry by fostering best practice work and corporate standards. 
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16}}>
                                    The initial focus will be on Building and Pest Inspections but it is envisaged that this will be expanded over time to include a range of building and property inspection professions such as, Electrics, Plumbing, Gas, Asbestos and Drug. 
                                </p>
                                              
    
                            </div>
                            

                            

                            <div style={{backgroundColor:'rgba(255,255,255,0.5)', padding:20}}>
                                <h1 style={{color:'rgb(40,40,40)'}}>
                                    Committee
                                </h1>
                                <br></br>
                                <div style={{}}>
                            
                                    <div style={{margin:'2vh',}}>   
                                        <div style={{
                                                width: '90vw',
                                                backgroundColor: 'rgb(40,40,40)',
                                                borderRadius: '2vh',
                                                display: 'table-cell',
                                                textAlign: 'center',
                                                verticalAlign: 'middle',
                                                padding:'1vw'
                                            }}>
                                            <span style={{color:'rgb(100,100,100)', fontSize:'2vh'}}>
                                                Chairman
                                            </span>
                                            <br></br>
                                            <span style={{color:'rgb(200,200,200)', fontSize:'3vh'}}>
                                                Andrew Booth
                                            </span>                                        
                                        </div>      
                                    </div>     
                            
                                    <div style={{margin:'2vh',}}>   
                                        <div style={{
                                                width: '90vw',
                                                backgroundColor: 'rgb(40,40,40)',
                                                borderRadius: '2vh',
                                                display: 'table-cell',
                                                textAlign: 'center',
                                                verticalAlign: 'middle',
                                                padding:'1vw'
                                            }}>
                                            <span style={{color:'rgb(100,100,100)', fontSize:'2vh'}}>
                                                Deputy Chairman
                                            </span>
                                            <br></br>
                                            <span style={{color:'rgb(200,200,200)', fontSize:'3vh'}}>
                                                Vacant
                                            </span>                                         
                                        </div>      
                                    </div>     
                            
                                    <div style={{margin:'2vh',}}>   
                                        <div style={{
                                                width: '90vw',
                                                backgroundColor: 'rgb(40,40,40)',
                                                borderRadius: '2vh',
                                                display: 'table-cell',
                                                textAlign: 'center',
                                                verticalAlign: 'middle',
                                                padding:'1vw'
                                            }}>
                                            <span style={{color:'rgb(100,100,100)', fontSize:'2vh'}}>
                                                Treasurer
                                            </span>
                                            <br></br>
                                            <span style={{color:'rgb(200,200,200)', fontSize:'3vh'}}>
                                                Andrew Scales
                                            </span>                                        
                                        </div>      
                                    </div>     
                            
                                    <div style={{margin:'2vh',}}>   
                                        <div style={{
                                                width: '90vw',
                                                backgroundColor: 'rgb(40,40,40)',
                                                borderRadius: '2vh',
                                                display: 'table-cell',
                                                textAlign: 'center',
                                                verticalAlign: 'middle',
                                                padding:'1vw'
                                            }}>
                                            <span style={{color:'rgb(100,100,100)', fontSize:'2vh'}}>
                                                Secretary
                                            </span>
                                            <br></br>
                                            <span style={{color:'rgb(200,200,200)', fontSize:'3vh'}}>
                                                Dave Clark
                                            </span>                                         
                                        </div>     
                                    </div>     
                            
                                    <div style={{margin:'2vh',}}>   
                                        <div style={{                                                
                                                width: '90vw',
                                                backgroundColor: 'rgb(40,40,40)',
                                                borderRadius: '2vh',
                                                display: 'table-cell',
                                                textAlign: 'center',
                                                verticalAlign: 'middle',
                                                padding:'1vw'
                                            }}>
                                            <span style={{color:'rgb(100,100,100)', fontSize:'2vh'}}>
                                                Communications
                                            </span>
                                            <br></br>
                                            <span style={{color:'rgb(200,200,200)', fontSize:'3vh'}}>
                                                Michael Booth
                                            </span>                                         
                                        </div> 
                                    </div>        
                            
                                    <div style={{margin:'2vh',}}>   
                                        <div style={{                                                
                                                width: '90vw',
                                                backgroundColor: 'rgb(40,40,40)',
                                                borderRadius: '2vh',
                                                display: 'table-cell',
                                                textAlign: 'center',
                                                verticalAlign: 'middle',
                                                padding:'1vw'
                                            }}>
                                            <span style={{color:'rgb(100,100,100)', fontSize:'2vh'}}>
                                                General Committee
                                            </span>
                                            <br></br>
                                            <span style={{color:'rgb(200,200,200)', fontSize:'3vh'}}>
                                                Peter Barnes
                                            </span>                                         
                                        </div> 
                                    </div>     


                                </div>
    
    
                        </div>

                        <div style={{backgroundColor: '#000000', backgroundImage: 'url("https://www.transparenttextures.com/patterns/cartographer.png")', padding:20}}>                                         
                                <h1 style={{color:'white'}}>
                                    Association Mission
                                </h1>
                                <p style={{textAlign:'left', color:'white', fontSize:16, }}>
                                    To provide leadership on key issues impacting the building and property
                                    inspection industry and promote those considered views in key forums such
                                    as:
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16}}>
                                    1. Legislative/Code/Building Commission, Fair Trading and Consumer
                                    Protection
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, }}>
                                    2. Australian Standard development forums
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, }}>
                                    3. Broader Industry user forums (REIWA, AIB, AIBS, MBA, HIA)
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, }}>
                                    4. Industry self-regulation forums
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, }}>
                                    5. Forums where the interest of our end clients need to be represented,
                                    especially where that representation is not currently provided.
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, }}>
                                    6. To promote excellence, professionalism and safety in the inspection
                                    industry by fostering best practice work and corporate standards.
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, }}>
                                    7. The initial focus will be on Building and Pest Inspections but it is
                                    envisaged that this will be expanded over time to include a range of
                                    building and property inspection professions such as, Electrics, Plumbing,
                                    Gas, Asbestos and Drug.
                                </p>
                        </div>

                        <div style={{backgroundColor: '#000000', backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-brick-wall.png")', padding:30}}>                                         
                                <h1 style={{color:'white'}}>
                                    Association Objectives
                                </h1>
                                <p style={{textAlign:'left', color:'white', fontSize:16, }}>
                                    1. To be a representative body for professional building and property inspection organisations in Western Australia
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, }}>
                                    2. To promote and represent the industry as professional and quality service providers
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, }}>
                                    3. To represent the industry in legislative and regulatory development
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, }}>
                                    4. To represent the industry in forums and discussion groups that:
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16,marginLeft:20}}>
                                    a. Are likely to utilise the services of building and property inspectors
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16,marginLeft:20}}>
                                    b. Are impacted by building and property inspection reports
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, }}>
                                    5. To represent the interest of our industry clients in WA forums where those interests may not currently be represented. Clients would include:
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16,marginLeft:20}}>
                                    a. Property owners, buyers, sellers, owners and those engaging builders to
                                    build on their behalf
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16,marginLeft:20}}>
                                    b. Strata Companies &amp; Strata Managers
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, }}>
                                    6. To promote quality building and property inspection practices across WA.
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, }}>
                                    7. To promote standards of competence and performance for building and
                                    property inspections such that:
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16,marginLeft:20}}>
                                    a. The Association standards are recognised
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16,marginLeft:20}}>
                                    b. The Association members are recognised as being competent and self-regulated
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, }}>
                                    8. To facilitate the exchange of information between members relating to the issues which impact on the professional inspection of buildings and properties
                                </p>

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
    
                        <div style={{marginTop:'10vh'}}>    
                            <div style={{height:'50vh', width:'60vw', marginLeft:'20vw', fontSize:30, display: 'grid', placeItems: 'center center'}}>
                                <img style={{height:'30vh', marginTop:'20vh'}} src={require('../../assets/icons/check-mark.png')} />
                            </div>
                            <div style={{height:'30vh', width:'60vw', marginLeft:'20vw', fontSize:30, display: 'grid', placeItems: 'center center'}}>
                                <p style={{fontSize:30, fontStyle:'italic', color:'rgb(220,220,220)'}}>
                                    Our vision is to be WA’s peak body representing professional independent building and property inspection businesses.
                                </p>
                            </div>
                            <div style={{height:'20vh'}}>
                            </div>
                            
    
                            <div style={{backgroundColor:'rgba(255,255,255,0.5)', padding:30}}>                                                                                                          
                                <img style={{height:'20vh'}} src={require('../../assets/icons/placeholder.png')} />   

                                <div style={{display: 'grid', placeItems: 'center center'}}>    
                                    <h1 style={{color:'rgb(40,40,40)', padding:10}}>
                                        Our team
                                    </h1>                                
                                    <p style={{textAlign:'center', color:'rgb(40,40,40)', fontSize:16, width:'60%'}}>
                                        Building Inspectors within the association must now be a WA registered builders as a minimum. Applications from engineers and or builder surveyors are encouraged where applicants demonstrate active involvement in WA building inspections . Association inspectors cover Perth & Regional WA.
                                    </p>
                                </div>          
    
                            </div>
    
    
                            <div style={{backgroundColor:'rgba(0,0,0,0.3)', padding:30}}>
                            
                                <div style={{width:'70%', marginLeft:'15%', textAlign:'center'}}>                              
                                        <h1 style={{color:'white', padding:10}}>
                                            Industry leaders
                                        </h1>
                                        <p style={{textAlign:'center', color:'white', fontSize:16}}>
                                            We provide thought leadership on key issues impacting the building and property inspection industry and promote those considered views in key forums. We aim to lead by example through our professionalism and safety in the inspection industry by fostering best practice work and corporate standards. 
                                        </p>
                                        <p style={{textAlign:'center', color:'white', fontSize:16}}>
                                            The initial focus will be on Building and Pest Inspections but it is envisaged that this will be expanded over time to include a range of building and property inspection professions such as, Electrics, Plumbing, Gas, Asbestos and Drug. 
                                        </p>                                 
                                        <img style={{maxHeight:'20vh'}} src={require('../../assets/icons/seminar.png')} />                             
                                </div>
                                <br></br>
    
                            </div>


                            <div style={{backgroundColor:'rgba(255,255,255,0.5)', padding:30}}>
                                <h1 style={{color:'rgb(40,40,40)', padding:10}}>
                                    Current committee
                                </h1>
                                <div style={{display:'flex', flexDirection:'row'}}>
                            
                                    <div style={{flex:1}}>   
                                        <div style={{
                                                height: '10vw',
                                                width: '15vw',
                                                backgroundColor: 'rgb(40,40,40)',
                                                borderRadius: '10%',
                                                display: 'table-cell',
                                                textAlign: 'center',
                                                verticalAlign: 'middle',
                                                padding:'1vw'
                                            }}>
                                            <span style={{color:'rgb(100,100,100)', fontSize:'1vw'}}>
                                                Chairman
                                            </span>
                                            <br></br>
                                            <span style={{color:'rgb(200,200,200)', fontSize:'1.5vw'}}>
                                                Andrew Booth
                                            </span>                                        
                                        </div>      
                                    </div>     
                            
                                    <div style={{flex:1}}>   
                                        <div style={{
                                                height: '10vw',
                                                width: '15vw',
                                                backgroundColor: 'rgb(40,40,40)',
                                                borderRadius: '10%',
                                                display: 'table-cell',
                                                textAlign: 'center',
                                                verticalAlign: 'middle',
                                                padding:'1vw'
                                            }}>
                                            <span style={{color:'rgb(100,100,100)', fontSize:'1vw'}}>
                                                Deputy Chairman
                                            </span>
                                            <br></br>
                                            <span style={{color:'rgb(200,200,200)', fontSize:'1.5vw'}}>
                                                Vacant
                                            </span>                                        
                                        </div>      
                                    </div>     
                                    
                                    <div style={{flex:1}}>   
                                        <div style={{
                                                height: '10vw',
                                                width: '15vw',
                                                backgroundColor: 'rgb(40,40,40)',
                                                borderRadius: '10%',
                                                display: 'table-cell',
                                                textAlign: 'center',
                                                verticalAlign: 'middle',
                                                padding:'1vw'
                                            }}>
                                            <span style={{color:'rgb(100,100,100)', fontSize:'1vw'}}>
                                                Treasurer
                                            </span>
                                            <br></br>
                                            <span style={{color:'rgb(200,200,200)', fontSize:'1.5vw'}}>
                                                Andrew Scales
                                            </span>                                        
                                        </div>      
                                    </div>     
                                    
                                    <div style={{flex:1}}>   
                                        <div style={{
                                                height: '10vw',
                                                width: '15vw',
                                                backgroundColor: 'rgb(40,40,40)',
                                                borderRadius: '10%',
                                                display: 'table-cell',
                                                textAlign: 'center',
                                                verticalAlign: 'middle',
                                                padding:'1vw'
                                            }}>
                                            <span style={{color:'rgb(100,100,100)', fontSize:'1vw'}}>
                                                Secretary
                                            </span>
                                            <br></br>
                                            <span style={{color:'rgb(200,200,200)', fontSize:'1.5vw'}}>
                                                Dave Clark
                                            </span>                                        
                                        </div>      
                                    </div>     
                            
                                    <div style={{flex:1}}>   
                                        <div style={{
                                                height: '10vw',
                                                width: '15vw',
                                                backgroundColor: 'rgb(40,40,40)',
                                                borderRadius: '10%',
                                                display: 'table-cell',
                                                textAlign: 'center',
                                                verticalAlign: 'middle',
                                                padding:'1vw'
                                            }}>
                                            <span style={{color:'rgb(100,100,100)', fontSize:'1vw'}}>
                                                Communications
                                            </span>
                                            <br></br>
                                            <span style={{color:'rgb(200,200,200)', fontSize:'1.5vw'}}>
                                                Michael Booth
                                            </span>                                        
                                        </div>      
                                    </div>       
                            
                                    <div style={{flex:1}}>   
                                        <div style={{
                                                height: '10vw',
                                                width: '15vw',
                                                backgroundColor: 'rgb(40,40,40)',
                                                borderRadius: '10%',
                                                display: 'table-cell',
                                                textAlign: 'center',
                                                verticalAlign: 'middle',
                                                padding:'1vw'
                                            }}>
                                            <span style={{color:'rgb(100,100,100)', fontSize:'1vw'}}>
                                                General Committee
                                            </span>
                                            <br></br>
                                            <span style={{color:'rgb(200,200,200)', fontSize:'1.5vw'}}>
                                                Peter Barnes
                                            </span>                                        
                                        </div>      
                                    </div>     


                                </div>
                                <br></br>
    
                            </div>
                        </div>


                        <div style={{backgroundColor: '#000000', backgroundImage: 'url("https://www.transparenttextures.com/patterns/cartographer.png")', padding:30}}>                                         
                                <h1 style={{color:'white'}}>
                                    Association Mission
                                </h1>
                                <p style={{textAlign:'left', color:'white', fontSize:16, width:'70%', marginLeft:'15%'}}>
                                    To provide leadership on key issues impacting the building and property
                                    inspection industry and promote those considered views in key forums such
                                    as:
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, width:'70%', marginLeft:'15%'}}>
                                    1. Legislative/Code/Building Commission, Fair Trading and Consumer
                                    Protection
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, width:'70%', marginLeft:'15%'}}>
                                    2. Australian Standard development forums
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, width:'70%', marginLeft:'15%'}}>
                                    3. Broader Industry user forums (REIWA, AIB, AIBS, MBA, HIA)
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, width:'70%', marginLeft:'15%'}}>
                                    4. Industry self-regulation forums
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, width:'70%', marginLeft:'15%'}}>
                                    5. Forums where the interest of our end clients need to be represented,
                                    especially where that representation is not currently provided.
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, width:'70%', marginLeft:'15%'}}>
                                    6. To promote excellence, professionalism and safety in the inspection
                                    industry by fostering best practice work and corporate standards.
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, width:'70%', marginLeft:'15%'}}>
                                    7. The initial focus will be on Building and Pest Inspections but it is
                                    envisaged that this will be expanded over time to include a range of
                                    building and property inspection professions such as, Electrics, Plumbing,
                                    Gas, Asbestos and Drug.
                                </p>
                        </div>

                        <div style={{backgroundColor: '#000000', backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-brick-wall.png")', padding:30}}>                                         
                                <h1 style={{color:'white'}}>
                                    Association Objectives
                                </h1>
                                <p style={{textAlign:'left', color:'white', fontSize:16, width:'70%', marginLeft:'15%'}}>
                                    1. To be a representative body for professional building and property inspection organisations in Western Australia
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, width:'70%', marginLeft:'15%'}}>
                                    2. To promote and represent the industry as professional and quality service providers
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, width:'70%', marginLeft:'15%'}}>
                                    3. To represent the industry in legislative and regulatory development
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, width:'70%', marginLeft:'15%'}}>
                                    4. To represent the industry in forums and discussion groups that:
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, width:'70%', marginLeft:'15%', textIndent:20}}>
                                    a. Are likely to utilise the services of building and property inspectors
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, width:'70%', marginLeft:'15%', textIndent:20}}>
                                    b. Are impacted by building and property inspection reports
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, width:'70%', marginLeft:'15%'}}>
                                    5. To represent the interest of our industry clients in WA forums where those interests may not currently be represented. Clients would include:
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, width:'70%', marginLeft:'15%', textIndent:20}}>
                                    a. Property owners, buyers, sellers, owners and those engaging builders to
                                    build on their behalf
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, width:'70%', marginLeft:'15%', textIndent:20}}>
                                    b. Strata Companies &amp; Strata Managers
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, width:'70%', marginLeft:'15%'}}>
                                    6. To promote quality building and property inspection practices across WA.
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, width:'70%', marginLeft:'15%'}}>
                                    7. To promote standards of competence and performance for building and
                                    property inspections such that:
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, width:'70%', marginLeft:'15%', textIndent:20}}>
                                    a. The Association standards are recognised
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, width:'70%', marginLeft:'15%', textIndent:20}}>
                                    b. The Association members are recognised as being competent and self-regulated
                                </p>
                                <p style={{textAlign:'left', color:'white', fontSize:16, width:'70%', marginLeft:'15%'}}>
                                    8. To facilitate the exchange of information between members relating to the issues which impact on the professional inspection of buildings and properties
                                </p>

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
export default About

