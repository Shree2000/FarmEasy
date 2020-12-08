import React from 'react';
import './mycrop.styles.css';
import Sidenav from '../../sidenavbar/sidenav.component';
import Rightimage from '../../right-image/rightimage.component';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import _ from "lodash";
import MyCropListComp from '../../cropOrders/cropOrders.component';
import Identify from '../../../utils/Identify';

class MyCropList extends React.Component{
    constructor(){
        super();
        this.username='';
        this.usertype='';
        this.state={
            arr:[],
            total_Orders:0, 
            order_Total:0
        }

        axios.post('http://06ea2bf48204.ngrok.io/farmerorder',{
            farmer_name:"Pashva Mehta" 
        })
        .then(response=>{
            let dataobj = _.cloneDeep(response.data);
            dataobj=dataobj.listoforders;
            console.log(dataobj);
            for(const name in dataobj){
               let buyer=name;
               let orderobj= _.cloneDeep(dataobj[name]);
               for(const orderids in orderobj){
                   let id=orderids;
                   let orders=_.cloneDeep(orderobj[orderids]);
                   let status=orders.deliverystatus;
                   let products=orders.products;
                   products.forEach(order => { 
                    this.setState({
                        arr:[...this.state.arr,{id:id,status:status,cropname:order.cropname,quantity:order.quantity,cost:order.cost,buyer:buyer}],
                    })      
                    this.setState({
                        order_Total : this.state.order_Total+ order.cost,
                        total_Orders : this.state.total_Orders+1,

                    },()=>{console.log(this.state);})
                });
               }   
            }
        localStorage.setItem("stats", JSON.stringify({
            order_Total:this.state.order_Total,
            total_Orders:this.state.total_Orders,
        }));    
        })
        .catch(e=>{
            console.log(e);
            toast.error("Something went wrong! Please, try again.")
        })
    }
    collectdata= ()=>{
        let usedData= Identify.getData();
        if(usedData!=='nodata')
        {
         this.username= usedData.username;
         this.usertype= usedData.usertype;
        }
        else{
            this.username='';
            this.usertype='';
        }
     }

    render(){
        this.collectdata();
        return (
            <div>
                <Sidenav />
                <div className='ContentArea'>
                    <div className="contentMsg">  
                        <h1 className='farmerWelcome'>Your Orders,</h1>
                        <p className="farmermsg">{this.username?this.username:"Farmer X"}</p>
                    </div>
                    <div className="cropListWrapper">
                    {this.state.arr.map((arritem)=>{
                        return <MyCropListComp id={arritem.id} status={arritem.status} cropname={arritem.cropname} quantity={arritem.quantity} cost={arritem.cost} buyer={arritem.buyer} />
                    })}    
                    {/* <MyCropListComp  status={"Completed"} />    
                    <MyCropListComp  status={"Not Delivered yet"} />     */}
                    </div>
                </div>
                <Rightimage />
                <ToastContainer position="bottom-right" pauseOnHover={false} />
            </div>
        )
    }
}
export default MyCropList;