import React,{useState,useEffect,useRef} from "react";
import styles from "./singleorder.module.css";
import axios from "axios";
import Identity from '../../utils/Identify';



function SingleOrder(props)
{


    const source1 = require("../../images/check.svg");
    const source2 = require("../../images/hourglass.svg");
    const source3 = require("../../images/postman.svg");
    const source4 = require("../../images/minimap.png");
    const source5 = require("../../images/visibility.svg");

    function maphandler(){
        console.log("clicked...");
        props.setter(props.firstcoords,props.secondcoords);
    }


    return(
        <div className={styles.singleouter}>
            
            <div className={"row"}>
                <div className={"col-5"}>
                    <h1 className={styles.toplabel}>Order Id :</h1>
                    <h1 className={styles.topvalue} >{props.orderid} </h1>
                </div>
                <div className={"col-4"}>
                <h1 className={styles.toplabel}>Status:</h1>
                { props.status ? <h1 className={styles.topvalue} >Delivered </h1> : <h1 className={styles.topvalue} >Pending</h1> }
                
                </div>
                <div className={"col-3 "+styles.logoouter}>
                { props.status ? <h1 className={styles.topvalue} ><img src={source1} className={styles.statusimg}/> </h1> : <img src={source2} className={styles.statusimg} /> }
                    
                    

                </div>

            </div>
            <hr className={styles.firsthr} />
            <div className={styles.seconddiv}>
                <div className={"row"}>
                    <div className={"col-4 "}>
                    <h1 className={styles.pricelabel}>Price : </h1>
                    </div>
                    <div className={"col-8 "+styles.leftalign}>
                    <h1 className={styles.price}>Rs {props.price} </h1>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-4 "}>
                    <h1 className={styles.pricelabel}>Delivery Address : </h1>
                    </div>
                    <div className={"col-8 "+styles.leftalign}>
                    <h1 className={styles.price}> {props.address} </h1>
                    </div>
                </div>

            </div>
            <hr className={styles.firsthr} />
            <div className={styles.thirddiv}>
                <div className={"row"}>
                    <div className={"col-3"}>
                        <img src={source3} className={styles.deliveryguysvg} />
                    </div>
                    <div className={"col-5 "+styles.deliverydetails}>
                        <h1 className={styles.deliveryname}>Tobey Maguire</h1>
                        <h1 className={styles.deliveryic}>In charge of delivery</h1>
                        <h1 className={styles.deliverycontact}>+91 77108567432</h1>                       
                    </div>
                    <div className={"col-4 "+styles.minimapdiv} onClick={maphandler}>
                    <div className={styles.container}>
                    <img src={source4} className={styles.minimap} />
                        <div className={styles.overlay}>
                        {/* <div classname={styles.text} >  */}
                            <img src={source5} className={styles.visibility} />
                        {/* </div> */}
                    </div>
                    </div>
                    </div>

                </div>
            </div>

        </div>
    )
} 


export default SingleOrder;
