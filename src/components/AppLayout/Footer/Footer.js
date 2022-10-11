import React from 'react'
import classes from './Footer.module.css';
const Footer = props => {
  return (
    <div className={classes.footer}>
        <div className={classes.developerSignature}>A good developer production</div>
        <div>Netflix Clone &copy;2022</div>
    </div>
  )
}


export default Footer