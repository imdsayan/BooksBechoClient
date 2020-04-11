import React from 'react';
import classes from './Toolbar.module.css'
import Menu from './ToolbarItems/Menu/Menu';
import Logo from './ToolbarItems/Logo/Logo';
import SignIn from './ToolbarItems/SignIn/SignIn';


const Toolbar = (props) => {

   return (
    <ul className={classes.Toolbar}>
       <li className={classes.li}> 
          <Menu />
       </li>
       <li className={classes.li}> 
          <Logo />
       </li>
       <li style={{float:'right'}} className={classes.li}> 
          <SignIn />
       </li>
    
    </ul>
    );
}
export default Toolbar;