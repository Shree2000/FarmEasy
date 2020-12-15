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
      phonenumber:"123456",
      usertype:"Farmers",
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
        axios.post('http://261fdb878eb1.ngrok.io/farmers',{
            name:formData.username,
            latitude:props.latitude,
            longitude:props.longitude,
            emailaddress:"bakhaidhairya@gmail.com",
            phonenumber:"123456",
            usertype:formData.usertype,
        })
          .then(function (response) {
            console.log("success");
          })
          .catch(function (error) {
            console.log(error+ "At spatial side");
          });
          axios.post('http://c421d8af2723.ngrok.io/register',{
            username:formData.username,
            usertpe:formData.usertype,
            password:formData.password,
            latitude:props.latitude,
            longitude:props.longitude,
            emailaddress:"bakhaidhairya@gmail.com",
            phonenumber:"123456",
            usertype:formData.usertype,
            address:formData.address,
        })
          .then(function (response) {
            props.notify("success","You have been registered Succesfully");
          })
          .catch(function (error) {
            console.log(error + "at graph side");
            props.notify("failure","Please try again!");
          });
        setFormData({
            username:"",
            password:"",
            address:"",
            phonenumber:123456,
            usertype:"Farmers"
        })
        props.Toggsetter(false);
        
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
                <option value="Farmer">Farmers</option>
                <option value="Customers">Customers</option>
            </select>    
            <input type="submit" value="Register" onClick={RegisterHandler} />
        </form>
        <ToastContainer />
    </div>
  };
  
  export default withRouter(Modal);


    // localStorage.setItem('cookieData',JSON.stringify(response.data));
            // sessionStorage.setItem('Auth','yes');
            // Idenity.setData(response.data.username,response.data.usertype);
            // if(response.data.usertype === "Farmers"){
            //     props.prop.history.push('/mycrops');
            //   }else{
            //     props.prop.history.push('/user');
            //   }
