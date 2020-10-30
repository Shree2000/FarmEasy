////LOGIN PAGE!!!!!!!!!!


import React,{useState} from "react";
import styles from  "./Register.module.css";
import axios from "axios";
import Auth from '../../utils/auth';
import Idenity from '../../utils/Identify';
const Register = (props) => {
  
  const [signup,setsignup] = useState(false);
  const [email,changeemail] = useState("");
  const [password,changepassword] = useState("");
  const [formData, setFormData] = useState({
    username:"",
    password:""
  })

  // function emailhandler(e){
	//   changeemail(e.target.value);
  // }
  // function passwordhandler(e){
	// changepassword(e.target.value);
	// }
	// 	function signinhandler(e){
	// console.log(email);
	// console.log(password);
  // }
  

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
    
   
    axios.post('http://baf8c8da582f.ngrok.io/login',formData)
      .then(function (response) {
        console.log(response.data);
        if(response.data.authenticated == "True"){
          Auth.login();
          if(response.data.usertype=='Farmers'){
             Idenity.setData(response.data.username,response.data.usertype); 
             props.prop.history.push('/try');
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
    <img src={require("../../images/logo.png")} className={styles.circle_img} />
    <p className={styles.cross} onClick={()=>{props.Regsetter(false)}}>+</p>
    <h1 className={styles.loginheader}>Login</h1>
    <form action="">
        <p>Username</p>
        <input type="text" name="username" id="" autoComplete="off" onChange={changeHandler} placeholder="Enter Username" value={formData.username} />
        <p>Password</p>
        <input type="password" name="password" id=""  autoComplete="off" onChange={changeHandler} placeholder="Password"  value={formData.password}/>    
        <input type="submit" value="Login" onClick={login} />
        <a href="#">Reset Passsword</a>
        <a href="#">Don't have an account?</a>
    </form>
</div>
  };
  
  export default Register;