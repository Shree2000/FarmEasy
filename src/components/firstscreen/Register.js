////LOGIN PAGE!!!!!!!!!!


import React,{useState} from "react";
import styles from  "./Register.module.css";
import axios from "axios";
import Auth from '../../utils/auth';
import Idenity from '../../utils/Identify';
const Register = (props) => {
  
  const [formData, setFormData] = useState({
    username:"",
    password:"",
    latitude:0,
    longitude:0,
  })

 
  

  function changeHandler(event)
  {
    const {name,value} = event.target;
    setFormData(prev=>{
      return{
        ...prev,
        [name]: value
      }
    });
  }

  function login()
  {
 
    navigator.geolocation.getCurrentPosition((pos)=>{setFormData((props)=>{
      return {
         ...props,
         latitude:pos.coords.latitude,
         longitude:pos.coords.longitude,} 
      })}, (err)=>{console.log("err");}, {enableHighAccuracy: true,timeout: 5000,maximumAge: 0});
    axios.post(Idenity.api + 'login',formData)
      .then(function (response) {
        console.log(response.data);
        if(response.data.authenticated === "True"){
          localStorage.setItem('cookieData',JSON.stringify(response.data)); // cookie change
          sessionStorage.setItem('Auth','yes');
          Idenity.setData(response.data.username,response.data.usertype); 
          if(response.data.usertype === "Farmers"){
            props.prop.history.push('/mycrops');
          }else{
            props.prop.history.push('/user');
          }
        }else{
          console.log(Auth.isAuthenticated());
        }
      })
      .catch(function (error) {
        console.log(error);
      });
      props.Regsetter(false);
     setFormData({
      username:"",
      password:""
    })
  }


    return <div className={styles.loginbox}>
    <img src={require("../../images/logo.png")} alt='logo' className={styles.circle_img} />
    <p className={styles.cross} onClick={()=>{props.Regsetter(false)}}>+</p>
    <h1 className={styles.loginheader}>Login</h1>
    <form action="">
        <p>Username</p>
        <input type="text" name="username" id="" autocomplete="off" onChange={changeHandler} placeholder="Enter Username" value={formData.username} />
        <p>Password</p>
        <input type="password" name="password" id=""  autocomplete="off" onChange={changeHandler} placeholder="Password"  value={formData.password}/>    
        <input type="submit" value="Login" onClick={login} />
        <a href="#">Reset Passsword</a>
        <a href="#">Don't have an account?</a>
    </form>
</div>
  };
  
  export default Register;