import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import styles from "./cart.module.css";
import CartItem from "./cart_item";
import axios from "axios";
import Identity from '../../utils/Identify';


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

            </div>
            
        </div>
    )
} 


export default Cart;
