import React from 'react';
import classes from './Toolbar.module.css'
import ToolbarItems from './ToolbarItems/ToolbarItems';
import * as constants from '../../../constants/MessageConstants'


const Toolbar = (props) => {

   return (
    <ul className={classes.Toolbar}>   
    <ToolbarItems isActive={false}>{constants.MENU}</ToolbarItems>
    <ToolbarItems isActive={false}>{constants.LOGO}</ToolbarItems>
    <ToolbarItems isActive={false}>{constants.SIGN_IN}</ToolbarItems>
    
    </ul>
    );
}
export default Toolbar;