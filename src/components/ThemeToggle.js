import React, { Component } from 'react';
import ThemeProvider, { Theme } from './contexts/Theme';

class ThemeToggle extends Component {
    static contextType=Theme;

    render() { 
        const {toggleTheme}=this.context;
        return (
            <button onClick={ toggleTheme }>Toggle the theme</button>
          );
    }
}
 
export default ThemeToggle;