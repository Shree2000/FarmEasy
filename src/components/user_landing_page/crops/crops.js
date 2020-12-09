import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import styles from "./crops.module.css";
import SingleCrop from "./single_crop";
import axios from "axios";
import Identity from '../../../utils/Identify';


// const crops = [
//     {
//         productcategory : "Corn",
//         img : "../../../images/corn.png",
//         rating : 4.4 ,
//         price : 200,
//         availability : 1000,
//         sellername : "Akash Khurana",
//         selleraddress : "Mumbai",
//         harvestseason : "Summer 2020",
//     },
//     {
//       productcategory : "Corn",
//       img : "../../../images/corn.png",
//       rating : 4.4 ,
//       price : 200,
//       availability : 1000,
//       sellername : "Akash Khurana",
//       selleraddress : "Mumbai",
//       harvestseason : "Summer 2020",
//   },  {
//     productcategory : "Corn",
//     img : "../../../images/corn.png",
//     rating : 4.4 ,
//     price : 200,
//     availability : 1000,
//     sellername : "Akash Khurana",
//     selleraddress : "Mumbai",
//     harvestseason : "Summer 2020",
// },  {
//   productcategory : "Corn",
//   img : "../../../images/corn.png",
//   rating : 4.4 ,
//   price : 200,
//   availability : 1000,
//   sellername : "Akash Khurana",
//   selleraddress : "Mumbai",
//   harvestseason : "Summer 2020",
// },  {
//   productcategory : "Corn",
//   img : "../../../images/corn.png",
//   rating : 4.4 ,
//   price : 200,
//   availability : 1000,
//   sellername : "Akash Khurana",
//   selleraddress : "Mumbai",
//   harvestseason : "Summer 2020",
// },  {
//   productcategory : "Corn",
//   img : "../../../images/corn.png",
//   rating : 4.4 ,
//   price : 200,
//   availability : 1000,
//   sellername : "Akash Khurana",
//   selleraddress : "Mumbai",
//   harvestseason : "Summer 2020",
// },  {
//   productcategory : "Corn",
//   img : "../../../images/corn.png",
//   rating : 4.4 ,
//   price : 200,
//   availability : 1000,
//   sellername : "Akash Khurana",
//   selleraddress : "Mumbai",
//   harvestseason : "Summer 2020",
// },  {
//   productcategory : "Corn",
//   img : "../../../images/corn.png",
//   rating : 4.4 ,
//   price : 200,
//   availability : 1000,
//   sellername : "Akash Khurana",
//   selleraddress : "Mumbai",
//   harvestseason : "Summer 2020",
// },  {
//   productcategory : "Corn",
//   img : "../../../images/corn.png",
//   rating : 4.4 ,
//   price : 200,
//   availability : 1000,
//   sellername : "Akash Khurana",
//   selleraddress : "Mumbai",
//   harvestseason : "Summer 2020",
// },  {
//   productcategory : "Corn",
//   img : "../../../images/corn.png",
//   rating : 4.4 ,
//   price : 200,
//   availability : 1000,
//   sellername : "Akash Khurana",
//   selleraddress : "Mumbai",
//   harvestseason : "Summer 2020",
// },  {
//   productcategory : "Corn",
//   img : "../../../images/corn.png",
//   rating : 4.4 ,
//   price : 200,
//   availability : 1000,
//   sellername : "Akash Khurana",
//   selleraddress : "Mumbai",
//   harvestseason : "Summer 2020",
// },
 
// ]



function Crops(props)
{

    // 0 pe kya hai 1 pe kya hai : 
    // 0 - 

    // axios.defaults.headers.post['Content-Type'] ='application/json';
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    const headers = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      // "http://eca6bec85e84.ngrok.io/allproduct"
    
    
    
      // console.log(apiurl);
      // axios({
      //   method: 'post',
      //   url: apiurl,
      //   data: {
      //       "username" : Identity.getData().username
      //   },
      //   headers : {
      //   'Content-Type': 'application/json',
      //   "Access-Control-Allow-Origin": "no-cors",
      //   }
      // }).then((response) => {
      //   const newcrops = response.data.productlist;
      //   setcrops(newcrops);
      // });


    return(
        <div className={styles.very_outerdiv}>
        <div className={styles.outerdiv}>
            {props.crops.map((single_crop,index) => {
                return(
                    <SingleCrop cropname = {single_crop.productcategory} img = {single_crop.img} rating = {single_crop.rating} price={single_crop.price} quantity={single_crop.availability} seller={single_crop.sellername} farm_location={single_crop.selleraddress} harvest={single_crop.harvestseason}/>
                )
            })}
            {/* <SingleCrop />
            <SingleCrop />
            <SingleCrop />
            <SingleCrop />
            <SingleCrop />
            <SingleCrop />
            <SingleCrop />
            <SingleCrop />
            <SingleCrop />
            <SingleCrop /> */}


           {/* <h1>Crops</h1> */}
            
        </div>
        </div>
    )
} 


export default Crops;
