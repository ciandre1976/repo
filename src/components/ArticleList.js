import React, { Component } from 'react';
import { Theme } from './contexts/Theme';

class ArticleList extends Component {
    static contextType=Theme;

    render() { 
        const {isLightTheme,light,dark}=this.context;
        const theme=isLightTheme?light:dark;
        return ( 
            <div className='aricle-list' style={{background:theme.ui,color:theme.syntax}}>
                <ul>
                    <li style={{background:theme.bg}}>Article 1</li>
                    <li style={{background:theme.bg}}>Article 2</li>
                    <li style={{background:theme.bg}}>Article 3</li>
                </ul>
            </div>
         );
    }
}
 
export default ArticleList;

