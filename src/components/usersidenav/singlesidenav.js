import React,{useState} from "react";
import styles from "./singlesidenav.module.css";

function SingleSideNav(props)
{
        
    
        return (
            <div className={styles.outer}>
                   <div className={styles.logo}>
                   <i className={props.logo} aria-hidden="true"></i>
                   </div>
                   <div className={styles.title}>
                    <h1 className={styles.title}>{props.title}</h1>
                   </div>
            </div>

        )
}


export default SingleSideNav;