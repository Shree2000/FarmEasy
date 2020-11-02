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
            <div className="child">
                <ul>
                    <li className={styles.navbuts}  onClick={onloginclickhandler2}>Log In</li>
                    <div className={styles.vl}></div>
                    <li className={styles.navbuts} onClick={onloginclickhandler1} >Sign Up</li>
                    <div className={styles.vl}></div>
                    <li><Link className={styles.navbuts} to='/aboutus'>About Us</Link></li>

                </ul>
            </div>
        </nav>
    </div>
    );
  };
  
  export default NavBar;