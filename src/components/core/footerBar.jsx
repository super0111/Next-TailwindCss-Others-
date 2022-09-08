import React, { Component } from 'react';
import { whileStatement } from '@babel/types';

//Import stylesheets


class FooterBar extends Component {
    state = {
        
    };

    styles = {
        footerBar: {
            width:'100%',
            background: 'rgb(30,30,30)',
            color: 'rgb(200,200,200)',
            textAlign:'center',
            padding:10
        },

    }

    render() { 
        return ( 
            <div style={this.styles.footerBar}>
                <a href="https://www.facebook.com/Inspectwa-103514357727017/" target="_blank" className="fa fa-facebook"></a>
                <a href="https://twitter.com/inspectwa2" target="_blank" className="fa fa-twitter"></a>
                <a href="https://www.linkedin.com/company/inspectwa/" target="_blank" className="fa fa-linkedin"></a>
                <br></br>
                <span style = {{color:'rgb(200,200,200)', fontSize:10, margin:10, textAlign:'center', verticalAlign:'center', }}>The Industry Association of Building and Property Inspectors in WA Inc. – Inspect WA</span>
                
            </div>
         );
    }
}
 
export default FooterBar;