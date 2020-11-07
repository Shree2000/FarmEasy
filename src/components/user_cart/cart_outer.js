import React,{useState} from "react";
import ReactDOM from "react-dom";
import NAV from "../user_landing_page/navbar";
import Cart from "./cart";

function CartOuter(props)
{

   
    return(
        <div>
            <NAV />
            <Cart />
        </div>
    )
} 


export default CartOuter;
