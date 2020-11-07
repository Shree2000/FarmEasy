import React,{useState} from "react";
import ReactDOM from "react-dom";
import styles from "./single_crop.module.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Identity from '../../../utils/Identify';


function SingleCrop(props)
{

   const [ button, setButton ] = useState(true);
   const [quantity,setquant] = useState(1);

    function addhandler(){
        console.log(quantity);
        toast.success("Added to cart",{
        position: "bottom-right",
        autoClose: 3000,
        });
        const apilink = Identity.api + "addtocart";
        console.log(apilink);
        console.log(props.seller);
        console.log(props.cropname);
        console.log(props.price);
        console.log("sending");
        axios.post(apilink, {
            "customer_name" : "John",
            // "customer_name" : Identity.getData().username,
            "seller_name" : props.seller,
            "category" : props.cropname,
            "quantity" : quantity,
            "cost" : props.price*quantity
        })
        .then(function (response) {
            // console.log("faegeg");
            console.log(response);
            // const newcrops = response.data.productlist;
            // setcrops(newcrops);
        })
        .catch(function (error) {
            console.log(error);
        });
        setButton(true);
        setquant(1);
    }


    const source = require("../../../images/corn.png");
    return(
        <div className={styles.singlecrop}>
            <div className={styles.header}>
    <h1 className={styles.card_title}>{props.cropname}</h1>
            </div>
            <hr className={styles.hori}/>
            <div>
                <img className={styles.cropimage}  src={source}></img>
            </div>
            <div className={"row " + styles.rating_div}>
                <div className={"col-md-3" + " " + styles.rating_outer}>
                        <h1 className={styles.rating_title}>Ratings</h1>
                        <h1 className={styles.rating_value}>{props.rating}</h1>

                </div>
                <div className={"col-md-6" + " " + styles.rating_outer}>
                        <h1 className={styles.rating_title}>Price</h1>
                        <h1 className={styles.rating_value}>Rs {props.price}/kg</h1>

                </div>
                <div className={"col-md-3" + " " + styles.rating_outer}>
                        <h1 className={styles.rating_title}>Availability</h1>
                        <h1 className={styles.rating_value}>{props.quantity}kg</h1>

                </div>
                

            </div>
            <div className={styles.seller_info}>
                <h1 className={styles.seller_title}>{props.cropname}</h1>
                <h1 className={styles.seller_subtitle}>Sold by {props.seller} </h1>
                <h1 className={styles.seller_subtitle}>Farm Location : {props.farm_location.slice(0,20) + "..."} </h1>
                <h1 className={styles.seller_subtitle}>Harvest Season : {props.harvest}</h1>

            </div>
            <div>{
                button
                 ?  <div className={styles.add_to_cart_div} >
                <h1 className={styles.add_to_cart_text} onClick={() => setButton(false)}>Add To Cart</h1>
                </div>
                 : <div className={styles.add_to_cart_div2}  >
                     <div className={styles.leftdiv}>
                         <div className={styles.innerdiv}>
                     <i className={"fa fa-arrow-left fa-lg " + styles.backarrow} aria-hidden="true" onClick={() => setButton(true)}></i>
                 <h1 className={styles.quantitytext}> Quantity : </h1>
                 <input className={styles.numinput} type="number"  value={quantity} onChange={(e) => setquant(e.target.value)}></input>
                 </div>
                    </div>
                    <div className={styles.rightdiv}>
                        <div className={styles.innerdiv} onClick={addhandler}>
                        <h1 className={styles.addtext}>Add</h1>
                        </div>
                    </div>
                     
                 </div>
                }
            
            </div>
            {/* <ToastContainer /> */}

        </div>
    )
} 


export default SingleCrop;
