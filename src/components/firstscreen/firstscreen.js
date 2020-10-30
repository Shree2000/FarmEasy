import React,{useState} from "react";
import styles from "./firstscreen.module.css";
import NavBar from "../navbar/navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from "./Modal";
import Register from "./Register";

const FirstScreen = (props) => {
    
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
       <div class={styles.parent} >
            <ToastContainer position="bottom-right" />
            <NavBar modalsetter={togglemodal} Regsetter={ToggleRegister}/>
            {modaltrue && <Modal showModal={modaltrue} Toggsetter={togglemodal} notify={notify} /> }
            {RegisterTrue && <Register showRegister={RegisterTrue} Regsetter={ToggleRegister} prop={props} /> }
            {/* <button class={styles.shopnowbutton}><h1 class={styles.shopnowtext} >SHOP NOW</h1></button> */}
        </div>
    );
  };
  
  export default FirstScreen;