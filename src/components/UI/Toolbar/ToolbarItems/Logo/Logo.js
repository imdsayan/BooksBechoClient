import React from 'react'
import classes from './Logo.module.css'
 
const Logo = (props) => {
  return (
    <div className={classes.Logo}>
    <a className={classes.a} href="#home"><span>BooksBecho</span></a>
    </div>
  );
}
 
export default Logo;