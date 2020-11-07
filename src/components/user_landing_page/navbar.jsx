import React,{useState} from "react";
import styles from "./navbar.module.css";
import UserSideNav from "../usersidenav/usersidenav";

function NAV()
{
        const [issidenav,setsidenav] = useState(false);

        const marginclass= issidenav ? styles.marginclass : styles.abcd;
    
        return (
            <div>
                {
                    issidenav 
                    && <UserSideNav collapse={setsidenav}/>
                }
                 
                
                <div className={styles.navwrapper}>
                <nav className={styles.outnav + " " +  marginclass }>
                {
                    !issidenav 
                    && <div className={styles.navheader}>
                    <i className={"fa fa-bars fa-2x "+styles.hamburger} aria-hidden="true" onClick={()=>setsidenav(!issidenav)}></i>
                    <h1 className={styles.navtitle}>FARMEASY</h1>
                    </div>
                }
                <div>
                    
                </div>
                <div className={styles.navoptions}>
                    <div className={styles.navunit}>
                    <i className={"fa fa-shopping-cart fa-lg "+styles.navicon} aria-hidden="true"></i>
                    <h1 className={styles.navopt}>Cart</h1>
                    </div>
                    <div className={styles.navunit}>
                    <i className={"fa fa-user fa-lg "+styles.navicon} aria-hidden="true"></i>
                    <h1 className={styles.navopt}>Profile</h1>
                    </div>
                    <div className={styles.navunit}>
                    <i className={"fa fa-sign-out fa-lg "+styles.navicon} aria-hidden="true"></i>
                    <h1 className={styles.navopt}>Logout</h1>
                    </div>
                    
                    
                   
                </div>
            </nav>
            </div>
            </div>

        )
}


export default NAV;