import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import styles from "./cart.module.css";
import CartItem from "./cart_item";
import axios from "axios";
import Identity from '../../utils/Identify';
import Razorpay from "razorpay";

const cart_items = [
    {
        cropname : "Corn",
        img : "../../../images/corn.png",
        rating : 4.4 ,
        price : 200,
        quantity : 1000,
        seller : "Akash Khurana",
        farm_loaction : "Mumbai",
        harvest : "Summer 2020",
    },
    {
        cropname : "Corn",
        img : "../../../images/corn.png",
        rating : 4.4 ,
        price : 200,
        quantity : 1000,
        seller : "Akash Khurana",
        farm_loaction : "Mumbai",
        harvest : "Summer 2020",
    }, {
        cropname : "Corn",
        img : "../../../images/corn.png",
        rating : 4.4 ,
        price : 200,
        quantity : 1000,
        seller : "Akash Khurana",
        farm_loaction : "Mumbai",
        harvest : "Summer 2020",
    }, {
        cropname : "Corn",
        img : "../../../images/corn.png",
        rating : 4.4 ,
        price : 200,
        quantity : 1000,
        seller : "Akash Khurana",
        farm_loaction : "Mumbai",
        harvest : "Summer 2020",
    }, {
        cropname : "Corn",
        img : "../../../images/corn.png",
        rating : 4.4 ,
        price : 200,
        quantity : 1000,
        seller : "Akash Khurana",
        farm_loaction : "Mumbai",
        harvest : "Summer 2020",
    }, {
        cropname : "Corn",
        img : "../../../images/corn.png",
        rating : 4.4 ,
        price : 200,
        quantity : 1000,
        seller : "Akash Khurana",
        farm_loaction : "Mumbai",
        harvest : "Summer 2020",
    }, {
        cropname : "Corn",
        img : "../../../images/corn.png",
        rating : 4.4 ,
        price : 200,
        quantity : 1000,
        seller : "Akash Khurana",
        farm_loaction : "Mumbai",
        harvest : "Summer 2020",
    },
    {
        cropname : "Corn",
        img : "../../../images/corn.png",
        rating : 4.4 ,
        price : 200,
        quantity : 1000,
        seller : "Akash Khurana",
        farm_loaction : "Mumbai",
        harvest : "Summer 2020",
    },
]
function Cart(props)
{
    const [cartprods,setcart] = useState([]);

    useEffect(() => {
        const apiurl = Identity.api + "cartitems";
        console.log(apiurl);
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
      }, []);

    function deletefunction(prodname,seller){
        const newprods = cartprods.filter( (oneobject)=> {
            return (oneobject.productcategory != prodname || oneobject.sellername != seller);
        })
        setcart(newprods);
    }

   

   

    function cartcheckout(){
   
        const apiurl2 = Identity.api + "payments";
        var order_id = "";
        axios.post(apiurl2, {
           "customer_name" : "John",
           "amount" : 4000,
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
                  const apiurl3 = Identity.api + "payments";
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
                  "color": "#218838"
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
                    <h1 className={styles.amounth1}>Rs 300</h1>
                </div>
            </div >
            <div className={styles.onerow}>
                <div className={styles.name}>
                    <h1 className={styles.nameh1}>Taxes</h1>
                </div>
                <div className={styles.amount}>
                    <h1 className={styles.amounth1}>Rs 100</h1>
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
                    <h1 className={styles.totalamounth1}>Rs 450</h1>
                </div>
            </div >
            <div className={styles.insurance}>
            <input type="checkbox" aria-label="Checkbox for following text input"></input>
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
