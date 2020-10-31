import React from 'react';
import './farmercontent.styles.css';
import Identify from '../../utils/Identify';

class Farmercenter extends React.Component{
    constructor()
    {
        super()
        this.username='';
        this.usertype='';
        this.state={}
    }
    collectdata= ()=>{
       let usedData= Identify.getData();
       if(usedData!='nodata')
       {
        this.username= usedData.username;
        this.usertype= usedData.usertype;
       }
       else{
           this.username='';
           this.usertype='';
       }
      
    }
    render()
    {
        this.collectdata();
        return (
            <div class="ContentArea">
            <h1>Welcome,</h1>
        <p class="farmermsg">{this.username=''?"Farmer X":this.username}</p>
            <div class="designcover">
                <div class="box1">
                    23000 baskets fulfilled
                </div>
                <div class="box2">
                    4 lakh rupees generated!
                </div>   
            </div>
           
        </div>
        )
    }
}
export default Farmercenter;