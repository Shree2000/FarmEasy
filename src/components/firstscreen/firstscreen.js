import React,{useState} from "react";
import styles from "./firstscreen.module.css";
import NavBar from "../navbar/navbar";
import { ToastContainer, toast } from 'react-toastify';
import Idenity from '../../utils/Identify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from "./Modal";
import Register from "./Register";

const FirstScreen = (props) => {

    if(localStorage.getItem('cookieData')!=null){  //cookie code
        let data= localStorage.getItem('cookieData'); //cookie code
        data=JSON.parse(data); //cookie code
        console.log(data); //cookie code
        sessionStorage.setItem('Auth','yes'); //cookie code
        Idenity.setData(data.username,data.usertype); //cookie code 
        props.history.push('/try'); //cookie code
    }
    const [modaltrue,togglemodal] = useState(false);
    const [RegisterTrue, ToggleRegister]= useState(false);
    function closemodal(){
        if(modaltrue){
            togglemodal(false);
        }
    }
    function closeReg(){
        if(RegisterTrue)
        {
            ToggleRegister(false);
        }
    }
    function notify()
    {
      toast.info("Registered Succesfully!");
    } 
    return (
       <div className={styles.parent} >
            <ToastContainer position="bottom-right" />
            <NavBar modalsetter={togglemodal} Regsetter={ToggleRegister}/>
            {modaltrue && <Modal showModal={modaltrue} Toggsetter={togglemodal} notify={notify} prop={props} /> }
            {RegisterTrue && <Register showRegister={RegisterTrue} Regsetter={ToggleRegister} prop={props} /> }
            {/* <button className={styles.shopnowbutton}><h1 className={styles.shopnowtext} >SHOP NOW</h1></button> */}
        </div>
    );
  };
  
  export default FirstScreen;