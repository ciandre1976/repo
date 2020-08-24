import React, {Component} from 'react';
import { Theme } from './contexts/Theme';

class Navbar extends Component {
    static contextType=Theme;
    render() { 
        const {isLightTheme,light,dark}=this.context;   
        const theme=isLightTheme?light:dark;

        return ( 
            <nav style={{background:theme.ui,color:theme.syntax}}>
                <h1>Trial App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
         );
    }
}
 
export default Navbar;