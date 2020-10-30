/// REGISTER PAGE!!!!!!!!!!!!!!!!!! 



import React,{useState} from "react";
import styles from  "./modalstyles.module.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';
const Modal = (props) => {
  

  const [signup,setsignup] = useState(false);
  const [email,changeemail] = useState("");
  const [password,changepassword] = useState("");
  const [formData, setFormData]= useState({
      username:"",
      password:"",
      address:"phase1 1802 Neelkamal Height Borivali(South) 400210",
      phonenumber:123456,
      usertype:""
  })

//   function emailhandler(e){
// 	  changeemail(e.target.value);
//   }
//   function passwordhandler(e){
// 	changepassword(e.target.value);
// 	}
// 		function signinhandler(e){
// 	// console.log(email);
// 	// console.log(password);
//     }
    
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
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
        setFormData({
            username:"",
            password:"",
            address:"phase1 1802 Neelkamal Height Borivali(South) 400210",
            phonenumber:123456,
            usertype:""
        })
        props.Toggsetter(false);
        props.notify();
     }   


    return <div className={styles.loginbox}>
        <img src={require("../../images/logo.png")}  className={styles.circle_img} />
        <h1 className={styles.loginboxheading}>Register</h1>
        <p class={styles.cross} onClick={()=>{props.Toggsetter(false)}}>+</p>
        <form action="">
            <p>Username</p>
            <input type="text" name="username" id={uuidv4()} placeholder="Enter Username" onChange={changeVal}  value={formData.username}/>
            <p>Password</p>
            <input type="password" name="password" id={uuidv4()} placeholder="Password" onChange={changeVal}  value={formData.password} />
            <select name="usertype" id={uuidv4()}  onChange={changeVal} value={formData.usertype}>
                <option value="Farmer">Farmer</option>
                <option value="New User">New User</option>
            </select>    
            <input type="submit" value="Register" onClick={RegisterHandler} />
            <a href="#">Reset Passsword</a>
            <a href="#">Already have an account?</a>
        </form>
    </div>
  };
  
  export default Modal;