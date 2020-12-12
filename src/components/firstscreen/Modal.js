/// REGISTER PAGE!!!!!!!!!!!!!!!!!! 



import React,{useState} from "react";
import styles from  "./modalstyles.module.css";
import axios from "axios";
import Auth from '../../utils/auth';
import Idenity from '../../utils/Identify';
import {withRouter} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';
const Modal = (props) => {
  
  const [formData, setFormData]= useState({
      username:"",
      password:"",
      address:"",
      phonenumber:123456,
      usertype:""
  })


    
        function changeVal(event){
            const {name,value}= event.target;
            setFormData((prev)=>{
                return{
                    ...prev,
                    [name]:value
                }  
            })

        }
      
     function RegisterHandler(event)
     {
        
        event.preventDefault();
        console.log(formData);
        axios.post('http://7137aa5b1a55.ngrok.io/register',formData)
          .then(function (response) {
            //if()
            localStorage.setItem('cookieData',JSON.stringify(response.data));
            sessionStorage.setItem('Auth','yes');
            Idenity.setData(response.data.username,response.data.usertype);
            props.prop.history.push('/mycrops');
          })
          .catch(function (error) {
            console.log(error);
          });
        setFormData({
            username:"",
            password:"",
            address:"",
            phonenumber:123456,
            usertype:""
        })
        props.Toggsetter(false);
        props.notify();
     }   


    return <div className={styles.loginbox}>
        <img src={require("../../images/logo.png")}  className={styles.circle_img} />
        <h1 className={styles.loginboxheading}>Register</h1>
        <p className={styles.cross} onClick={()=>{props.Toggsetter(false)}}>+</p>
        <form action="">
            <p>Username</p>
            <input type="text" autocomplete="off" name="username" id={uuidv4()} placeholder="Enter Username" onChange={changeVal}  value={formData.username}/>
            <p>Password</p>
            <input type="password" autocomplete="off" name="password" id={uuidv4()} placeholder="Password" onChange={changeVal}  value={formData.password} />
            <p>Address</p>
            <input type="text" name="address" autocomplete="off" id={uuidv4()} placeholder="Address" onChange={changeVal}  value={formData.address} />
            <select name="usertype" id={uuidv4()}  onChange={changeVal} value={formData.usertype}>
                <option value="Farmer">Farmer</option>
                <option value="New User">New User</option>
            </select>    
            <input type="submit" value="Register" onClick={RegisterHandler} />
        </form>
        <ToastContainer />
    </div>
  };
  
  export default withRouter(Modal);