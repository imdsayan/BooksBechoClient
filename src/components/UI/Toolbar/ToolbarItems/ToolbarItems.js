import React from 'react'
import classes from './ToolbarItems.module.css'
import * as constants from '../../../../constants/MessageConstants'

 
const ToolbarItems = (props) => {
  
   return (
 <li className={classes.ToolbarItems} style={props.children===constants.SIGN_IN?{float: 'right'}:null}>
    <a className={props.isActive?classes.active:classes.a} href="#Home">{props.children}</a>
    
   </li>
  );
}
 
export default ToolbarItems;