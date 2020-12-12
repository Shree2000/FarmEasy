import React,{useState} from "react";
import styles from "./navbar.module.css";
import UserSideNav from "../usersidenav/usersidenav";
import {Link , Redirect, withRouter} from 'react-router-dom';
import Identify from "../../utils/Identify";

function NAV(props)
{
        const [issidenav,setsidenav] = useState(false);

        const marginclass= issidenav ? styles.marginclass : styles.abcd;

        const Logout = ()=>{
            Identify.removeData();
            sessionStorage.setItem('Auth', "no");
            props.history.push('/');
            localStorage.removeItem('cookieData');
            //cookie destroy
        }

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
                    &&
                     
                    <div className={styles.navheader}>
                    <i className={"fa fa-bars fa-2x "+styles.hamburger} aria-hidden="true" onClick={()=>setsidenav(!issidenav)}></i>
                    <Link to="/user"> 
                    <h1 className={styles.navtitle}>FARMEASY</h1>
                    </Link>
                    </div>
                    
                }
                <div>
                    
                </div>
                <div className={styles.navoptions}>
                    <Link to="/cart">
                    <div className={styles.navunit}>
                    <i className={"fa fa-shopping-cart fa-lg "+styles.navicon} aria-hidden="true"></i>
                    <h1 className={styles.navopt}>Cart</h1>
                    </div>
                    </Link>
                    {/* <div className={styles.navunit}>
                    <i className={"fa fa-user fa-lg "+styles.navicon} aria-hidden="true"></i>
                    <h1 className={styles.navopt}>Profile</h1>
                    </div> */}
                    <div className={styles.navunit}>
                    <i className={"fa fa-sign-out fa-lg "+styles.navicon} aria-hidden="true"></i>
                    <h1 className={styles.navopt} onClick={Logout}>Logout</h1>
                    </div>
                    
                    
                   
                </div>
            </nav>
            </div>
            </div>

        )
}


export default withRouter(NAV);