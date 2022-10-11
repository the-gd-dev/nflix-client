import React from 'react'
import classes from './Footer.module.css';
const Footer = props => {
  return (
    <div className={classes.footer} style={{color : props.textColor}}>
        <div className={classes.developerSignature}>A Good Developer Production</div>
        <div className={classes.mastHead}>Netflix Clone &copy;2022</div>
    </div>
  )
}


export default Footer