import React,{useState} from "react";
import ReactDOM from "react-dom";
import NAV from "./navbar";
import Crops from "./crops/crops";
// import Filter from "./filter/filter";
import TopSection from "./top_section/top_section";
import styles from "./user_first.module.css";
import { ToastContainer, toast } from 'react-toastify';


function FarmerScreen()
{

    const [name,setname] = useState("");
    const [quantity,setquantity] = useState(0);
    const [cost,setcost] = useState(0);

    return(
        <div>
            <NAV />
            <div >
            {/* <Filter /> */}
            <TopSection />
            <Crops/>
            <ToastContainer />

            </div>
            
        </div>
    )
} 


export default FarmerScreen;
