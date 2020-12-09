import React,{useState} from "react";
import ReactDOM from "react-dom";
import styles from "./cart_item.module.css";
import axios from "axios";
import Identity from '../../utils/Identify';

function CartItem(props)
{   

    const source1 = require("../../images/corn.png");
    const source2 = require("../../images/millets.jpg");
    const source3 = require("../../images/rice.jpg");
    const source4 = require("../../images/wheat.jpg");
    const source5 = require("../../images/grains.png");

    let source;
    if( props.cropname.toLowerCase().includes("corn") ){
        source = source1;
    }else if( props.cropname.toLowerCase().includes("millets") ){
        source = source2;
    }else if( props.cropname.toLowerCase().includes("rice") ){
        source = source3;
    }else if( props.cropname.toLowerCase().includes("wheat") ){
        source = source4;
    }else{
        source = source5;
    }

    function deletehandler(){
        props.deleter(props.cropname,props.seller,props.quantity,props.price);
        const apiurl = Identity.api + "removefromcart";
        axios.post(apiurl, {
            "customer_name" : "John",
            "seller_name" : props.seller,
            "category" : props.cropname,
          })
          .then(function (response) {
            console.log(response.status);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    // const source = require("../../images/corn.png");
    return(
        <div className={styles.singlecartitem}>
               <div className={styles.cartimgdiv}>
               <img className={styles.cart_item_img}  src={source}></img>
               </div>
               <div className={styles.carttitlediv}>
               <h1 className={styles.carttitle}> {props.cropname} </h1>
               <h1 className={styles.cartsubtitle}>{props.seller}</h1>
               </div>
               <div className={styles.quantitydiv}>
               <h1 className={styles.cartquantity}>{props.quantity} kg</h1>
               </div>
               <div className={styles.costdiv}>
               <h1 className={styles.cartcost}>Rs {props.price}</h1>
               </div>
               <div className={styles.trashdiv}>
               <i className={"fa fa-trash fa-2x "+styles.trashicon} aria-hidden="true" onClick={deletehandler}></i>

               </div>
            
        </div>
    )
} 


export default CartItem;
