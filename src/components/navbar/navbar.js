import React from "react";
import styles from "./navstyles.module.css";
import { Link} from 'react-router-dom';


const NavBar = (props) => {
    function onloginclickhandler1(){
        props.Regsetter(false);
        props.modalsetter(true);
        // auth.login();
    }
    function onloginclickhandler2(){
        props.modalsetter(false);
        props.Regsetter(true);
        // auth.login();
    }

    


    return (
        <div className={styles.parent}>
        <nav>
            <h1>FArmeasy.</h1>
            <div className={styles.child}>
                <ul>
                    <li  onClick={onloginclickhandler2}><Link  className={styles.navbuts}>Log In</Link></li>
                    <div className={styles.vl}></div>
                    <li  onClick={onloginclickhandler1} ><Link  className={styles.navbuts}>Sign Up</Link></li>
                    <div className={styles.vl}></div>
                    <li><Link className={styles.navbuts} to='/aboutus'>About Us</Link></li>

                </ul>
            </div>
        </nav>
    </div>
    );
  };
  
  export default NavBar;