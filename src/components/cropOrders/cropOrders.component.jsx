import React from 'react';
import './croporders.styles.css';
import _ from "lodash";
const MyCropListComp = (props)=>{
    
    return <div className={`farmerOrderWrapper ${props.status=="Not Delivered yet"?"":"comp"}`} >
        <h5 className="farmerOrderHeader">{props.id} for ({props.cropname})</h5>
        <div className="farmerOrderDetails">
        <div>Quantity: {props.quantity}Kg</div>
        <div>Amount:Rs {props.cost}</div>
        </div>
        <p className='farmerOrderAddress'>{_.upperCase(props.buyer)},87 B 601/602 Trimbakeshvar Apt Sude hills Malabar(west)</p>
        <h6>{props.status=="Not Delivered yet"?"Pending":"Completed"}</h6>
    </div>
}
 export default MyCropListComp;