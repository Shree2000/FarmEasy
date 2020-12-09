import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import styles from "./cart.module.css";
import CartItem from "./cart_item";
import axios from "axios";
import Identity from '../../utils/Identify';
import Razorpay from "razorpay";


function Cart(props)
{
    const [cartprods,setcart] = useState([]);
    const [subtotal,setsubtotal] = useState(0);
    const [grandtotal,setgrandtotal] = useState(0);
    const [ischecked,setchecked] = useState(false);

    

    useEffect(() => {
        const apiurl = Identity.api + "cartitems";
        console.log(apiurl);
        axios.post(apiurl, {
            "customer_name" : "John"
          })
          .then(function (response) {
            console.log(response.data);
            setcart(response.data.cartlist);
            var totalcost = 0;
            response.data.cartlist.map((single_crop,index) => {
                // console.log(typeof(single_crop.productcost));
                // console.log(typeof(single_crop.productquantity));
                totalcost =totalcost + single_crop.productcost*single_crop.productquantity
            })
            console.log(totalcost);
            setsubtotal(totalcost);
            setgrandtotal(totalcost*1.18 + 50);
          })
          .catch(function (error) {
            console.log(error);
          });
         
      }, []);

    function deletefunction(prodname,seller,quantity,price){
        const newprods = cartprods.filter( (oneobject)=> {
            return (oneobject.productcategory != prodname || oneobject.sellername != seller);
        });
        setcart(newprods);
        setsubtotal(subtotal - quantity*price);
        setgrandtotal((subtotal - quantity*price)*1.18 + 50);

    }

   

   

    function cartcheckout(){
   
        const apiurl2 = Identity.api + "payments";
        var order_id = "";
        axios.post(apiurl2, {
           "customer_name" : "John",
           "amount" : grandtotal+1,
          })
          .then(function (response) {
            console.log(response);
            order_id = response.data.id;
            console.log("id");
            console.log(order_id);
            var options = {
              "key_id": "rzp_test_DIxCWuLnWg6dqh", 
              "key_secret" : "keuRd34N9FrGSY7vtMoRp5YH",
              "amount": "50000", 
              "currency": "INR",
              "name": "FarmEasy",
              "description": "Test Transaction",
              "order_id": order_id, 
              "handler": function (response){
                  const apiurl3 = Identity.api + "orderplaced";
                  axios.post(apiurl3, {
                    "customer_name" : "John",
                    "payment_id" : response.razorpay_payment_id,
                    "order_id" : response.razorpay_order_id,
                    "signature" : response.razorpay_signature
                  })
                  .then(function (res) {
                    console.log(res.status);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              },
              "prefill": {
                  "name": "Gaurav Kumar",
                  "email": "gaurav.kumar@example.com",
                  "contact": "9999999999",
                //   "method": "card",
                //   "card[name]": "Gaurav Kumar",
                //   "card[number]": "510406000008",
                //   "card[expiry]": "12/21",
                //   "card[cvv]": "123"
                },
              "notes": {
                  "address": "Razorpay Corporate Office"
              },
              "theme": {
                  "color": "#565CB9"
              }
          };
          const rzp1 = new window.Razorpay(options);
          rzp1.open();
          })
          .catch(function (error) {
            console.log(error);
          });
         
        // var rzp1 = new Razorpay(options);

    }

    function paymenthandler(){
        const apiurl = Identity.api + "cartitems";
        axios.post(apiurl, {
            "customer_name" : "John"
          })
          .then(function (response) {
            console.log(response.data);
            setcart(response.data.cartlist);
          })
          .catch(function (error) {
            console.log(error);
          });

    }


    function boolhandler(){
        if(ischecked){
            setgrandtotal(grandtotal-5);
        }else{
            setgrandtotal(grandtotal+5);
        }
        setchecked(!ischecked);
    }
   

   
    return(
        <div className={styles.cartpage}>
            
            <div className={styles.cartlist}>
                <h1 className={styles.shoppingtitle}>Shopping Cart</h1>
                <div>
                <h1 className={styles.shoppingsubtitle}>You have {cartprods.length} items in your cart : </h1>
                <div className={styles.sortbydiv}>
                    <div class="dropdown">
                    <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className={styles.sortbytext} >Sort By</span>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                    </div>
                </div>
                </div>
                {cartprods.map((single_crop,index) => {
                return(
                    <CartItem cropname = {single_crop.productcategory} img = {single_crop.img} rating = {single_crop.rating} price={single_crop.productcost} quantity={single_crop.productquantity} seller={single_crop.sellername} farm_location={single_crop.selleraddress} harvest={single_crop.harvestseason} deleter={deletefunction}/>
                )
            })}
            </div>
            <div className={styles.payment}>
            <div className={styles.paymentwrapper}>
                <div className={styles.checkoutheaderdiv}> 
                <h1 className={styles.checkouth1}>Checkout : </h1>
                </div>
            <div className={styles.onerow}>
                <div className={styles.name}>
                    <h1 className={styles.nameh1}>Subtotal</h1>
                </div>
                <div className={styles.amount}>
        <h1 className={styles.amounth1}>Rs {subtotal}</h1>
                </div>
            </div >
            <div className={styles.onerow}>
                <div className={styles.name}>
                    <h1 className={styles.nameh1}>Taxes</h1>
                </div>
                <div className={styles.amount}>
                    <h1 className={styles.amounth1}>Rs {Math.ceil(subtotal*0.18)}</h1>
                </div>
            </div >
            <div className={styles.onerow}>
                <div className={styles.name}>
                    <h1 className={styles.nameh1}>Delivery</h1>
                </div>
                <div className={styles.amount}>
                    <h1 className={styles.amounth1}>Rs 50</h1>
                </div>
            </div >
            <hr className={styles.dividerhr} />
            <div className={styles.onerow}>
                <div className={styles.name}>
                    <h1 className={styles.totalnameh1}>Total</h1>
                </div>
                <div className={styles.amount}>
                    <h1 className={styles.totalamounth1}>Rs {Math.ceil(grandtotal)}</h1>
                </div>
            </div >
            <div className={styles.insurance}>
            <input type="checkbox" className={styles.inscheckbox} aria-label="Checkbox for following text input" value={ischecked} onClick={boolhandler}></input>
            <h1 className={styles.insuranceh1}>Add Insurance worth Rs. 5 to cover the delivery</h1>
            </div>
                <button className={styles.checkoutbutton} onClick={cartcheckout}>
                    <h1 className={styles.cartbuttontext}>Cart Checkout</h1>
                    </button>
            </div>
            </div>
            
        </div>
    )
} 


export default Cart;
