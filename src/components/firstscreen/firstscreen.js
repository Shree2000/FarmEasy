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
        if(data.usertype==="Farmers") 
        props.history.push('/postacrop'); //cookie code
        else
        props.history.push('/user');
    }
    const [modaltrue,togglemodal] = useState(false);
    const [RegisterTrue, ToggleRegister]= useState(false);
    const [locdata, setlocdata]= useState({
        latitude:0,
        longitude:0
    });
    navigator.geolocation.getCurrentPosition((pos)=>{setlocdata((props)=>{
        return {
           ...props,
           latitude:pos.coords.latitude,
           longitude:pos.coords.longitude,} 
        })}, (err)=>{console.log(err);}, {enableHighAccuracy: true,timeout: 5000,maximumAge: 0});
    
    
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
    function notify(st,message)
    {
      if(st==="success")  
      toast.success(message);
      else
      toast.error(message);
    } 
    return (
       <div className={styles.parent} >
            <ToastContainer position="bottom-right" />
            <NavBar modalsetter={togglemodal} Regsetter={ToggleRegister}/>
            {modaltrue && <Modal longitude={locdata.longitude} latitude={locdata.latitude} showModal={modaltrue} Toggsetter={togglemodal} notify={notify} prop={props} /> }
            {RegisterTrue && <Register showRegister={RegisterTrue} Regsetter={ToggleRegister} prop={props} notify={notify} /> }
            {/* <button className={styles.shopnowbutton}><h1 className={styles.shopnowtext} >SHOP NOW</h1></button> */}
           { !modaltrue && !RegisterTrue && <h1 className={styles.firstpage_tagline}>Transforming, a field at a time</h1>}
        </div>
        
    );
  };
  
  export default FirstScreen;