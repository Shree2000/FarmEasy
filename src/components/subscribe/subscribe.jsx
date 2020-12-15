import React, {useState} from 'react';
import axios from 'axios';
import './subscribe.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 function Subscribe(){
    const [subscribe, setSubscribe] =useState(false);
    const [locdata, setlocdata]= useState({
        latitude:"",
        longitude:"",
    })

    function handleClick(){
        // let farmerName= localStorage.getItem('cookieData');
        // farmerName=JSON.parse(farmerName);
        // navigator.geolocation.getCurrentPosition((pos)=>{setlocdata((props)=>{
        //     return {
        //        ...props,
        //        latitude:pos.coords.latitude,
        //        longitude:pos.coords.longitude,} 
        //     })}, (err)=>{console.log("err");}, {enableHighAccuracy: true,timeout: 5000,maximumAge: 0});
        //     let postData={
        //         name:farmerName,
        //         latitude:locdata.latitude,
        //         longitude:locdata.longitude,
        //         email:"bakhaidhairya@gmail.com",
        //         phonenumber:"123456789",
        //     }
        //     axios.post("http://6acf2ddb8e50.ngrok.io/farmers",postData)
        //     .then(response=>{
        //         toast.success("You have been subscribed to our news letter");
        //     })
        //     .catch(err=>{
        //         toast.error("Try again, looks like our servers are sleeping")
        //     })



        if(subscribe===false)
        setSubscribe(true);
        else
        setSubscribe(false);

    }

    return(
        <div className="subscribe_wrapper">
            <div className={`subscribe_box ${subscribe===false?"":"checked"}`} onClick={handleClick}></div>
            <p  onClick={handleClick} className={`subscribe_text ${subscribe===false?"":"checked"}`}>
                {subscribe===false?"Subscribe to latest newsletter":"Unsubscribe from the newsletter"}
            </p>

        </div>
    )
}

export default Subscribe;