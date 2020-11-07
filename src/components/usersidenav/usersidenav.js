import React,{useState} from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import styles from "./usersidenav.module.css";

function UserSideNav(props)
{
        
    
        return (
            <div className={styles.navouter}>
                   <i className={"fa fa-bars fa-2x "+styles.hamburger} aria-hidden="true" onClick={ ()=> props.collapse(false)}></i>
                <h1 className={styles.navtitle}>FARMEASY</h1>
            </div>

        )
}


export default UserSideNav;