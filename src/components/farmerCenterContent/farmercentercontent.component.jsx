import React from 'react';
import './farmercontent.styles.css';
import Identify from '../../utils/Identify';

class Farmercenter extends React.Component{
    constructor()
    {
        super()

        this.state={}
    }
    render()
    {
        return (
            <div class="ContentArea">
            <h1>Welcome,</h1>
        <p class="farmermsg">{Identify.username==''?"Farmer X":Identify.username}</p>
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