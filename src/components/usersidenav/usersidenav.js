import React,{useState} from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import styles from "./usersidenav.module.css";
import SingleSidenav from "./singlesidenav";
import Identify from "../../utils/Identify";
import {Link , Redirect, withRouter} from 'react-router-dom';


function UserSideNav(props)
{
    const Logout = ()=>{
        console.log("logging out");
        Identify.removeData();
        sessionStorage.setItem('Auth', "no");
        props.history.push('/');
        localStorage.removeItem('cookieData');
        //cookie destroy
    }
    
        return (
            <div className={styles.navouter}>
                   <i className={"fa fa-bars fa-2x "+styles.hamburger} aria-hidden="true" onClick={ ()=> props.collapse(false)}></i>
                <h1 className={styles.navtitle}>FARMEASY</h1>
                <Link to="/user">
                <SingleSidenav logo={"fa fa-home fa-2x"} title={"Home"}/>
                </Link>
                <Link to="/cart">
                <SingleSidenav logo={"fa fa-shopping-cart fa-2x"} title={"Cart"}/>
                </Link>
                <Link to="/orders">
                <SingleSidenav logo={"fa fa-shopping-basket fa-2x"} title={"My Orders"}/>
                </Link>
                {/* <hr className={styles.horizontal} ></hr> */}
                <div onClick={Logout}>
                <SingleSidenav logo={"fa fa-sign-out fa-2x"} title={"Logout"}  />
                </div>

            </div>

        )
}


export default withRouter(UserSideNav);