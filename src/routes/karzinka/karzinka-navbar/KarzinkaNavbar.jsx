import React from 'react';
import logo from '../../../assets/home/logo.png';
import classes from './KarzinkaNavbar.module.css';
import { Link } from 'react-router-dom';

const KarzinkaNavbar = ({JSXcomponent}) => {
    return (
        <div>
            <div style={!JSXcomponent ? {justifyContent: "center"} : {padding: "0px 58px"}} className={classes.karzinka__navbar}>
                <Link style={JSXcomponent && {flex: "1"}} to="/" className={classes.navbar__logo}>
                        <img src={logo} alt="" />
                </Link>
               {JSXcomponent}
            </div>
        </div>
    )
}

export default KarzinkaNavbar