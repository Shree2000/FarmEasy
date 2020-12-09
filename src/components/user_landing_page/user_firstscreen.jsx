import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import NAV from "./navbar";
import Crops from "./crops/crops";
// import Filter from "./filter/filter";
import TopSection from "./top_section/top_section";
import styles from "./user_first.module.css";
import { ToastContainer, toast } from 'react-toastify';
import Identity from '../../utils/Identify';
import axios from "axios";


function FarmerScreen()
{

    const [crops,setcrops] = useState([]);
    const [suggestedcrops,setsuggestedcrops] = useState([]);

    useEffect(() => {
      const apiurl = Identity.api + "allproduct";
      console.log(apiurl);
      axios.post(apiurl, {
          "username" : "John"
        })
        .then(function (response) {
          console.log(response.data.productlist);
          const newcrops = response.data.productlist;
          setcrops(newcrops);
          setsuggestedcrops(newcrops);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);

    // const [name,setname] = useState("");
    // const [quantity,setquantity] = useState(0);
    // const [cost,setcost] = useState(0);

    // const [pricerange,setpricerange] = useState(0);
    // const [cropsarr,setcropsarr] = useState([]);

    function applyfilter(price,arr){
      console.log("filtering...");
      console.log(price);
      console.log(arr);
        var newarr = crops.filter((oneitem) => {
          
            if(price == 0 && oneitem.price<=100){
              console.log(oneitem.price);
              console.log(oneitem.productcategory.toLowerCase())
              console.log(arr.includes(oneitem.productcategory.toLowerCase()));
              return arr.includes(oneitem.productcategory.toLowerCase())
            }else if(price == 1 && oneitem.price<500 && oneitem.price>100){
              return arr.includes(oneitem.productcategory.toLowerCase())
            }else if(price == 2 && oneitem.price>500){
              return arr.includes(oneitem.productcategory.toLowerCase())
            }else if(price == 3){
              return arr.includes(oneitem.productcategory.toLowerCase())
            }
            return false;
        })
        // console.log()
        setsuggestedcrops(newarr);
    }

 

    function sortby(index){
      console.log(crops[0]);
      if(index == 0){
        console.log("came here");
        setsuggestedcrops(crops);
      }else{
          var anotherarr = suggestedcrops;
          anotherarr.sort((a, b) => {
            return a.price - b.price 
          })
          if(index === 1){
            setsuggestedcrops(anotherarr);
          }else if(index === 2){
            setsuggestedcrops(anotherarr.reverse());
          }
      }

    }

    function searching(searchterm){
      console.log(searchterm);
      if(searchterm !== ""){
        var newarr2 = crops.filter((oneitem) => {
          return oneitem.productcategory.toLowerCase().includes(searchterm.toLowerCase());
        })
        setsuggestedcrops(newarr2);
      }else{
        setsuggestedcrops(crops);
      }
    }

    return(
        <div>
            <NAV />
            <div >
            {/* <Filter /> */}
            <TopSection  filterfunc={applyfilter} searchfunction={searching} sorter={sortby} />
            <Crops crops={suggestedcrops} />
            <ToastContainer />

            </div>
            
        </div>
    )
} 


export default FarmerScreen;
