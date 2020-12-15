import React from 'react';
import './farmercontent.styles.css';
import Subscribe from '../subscribe/subscribe';
import LineChart from '../LineChart/lineChart.component';
import DoughnutChart from '../Pie-Chart/pieChart.component';
import Identify from '../../utils/Identify';
import axios from 'axios';
import Identity from '../../utils/Identify';


class Farmercenter extends React.Component{
    constructor()
    {
        super()
        this.username='';
        this.usertype='';
    
        this.state={
            stats:{},
            namearr:[],
            dataarr:[],
        }
        let farmerName= localStorage.getItem('cookieData');
        farmerName=JSON.parse(farmerName);
        axios.post(Identity.api + 'fcd',{farmername:farmerName.username})
        .then(response=>{
            let tempnamearr=[];
            let tempdataarr=[];
            let res= response.data.ans;
            res.forEach(element => {
                tempnamearr.push(element[0]);
                tempdataarr.push(element[1]);
            });
            this.setState({
                namearr:[...tempnamearr],
                dataarr:[...tempdataarr]
            });
        })
        .catch(err=>{
            this.setState({
                namearr:[...this.state.namearr, 'Rice', "Wheat", "Buckwheat", "Jowar", "Ragi"],
                dataarr:[...this.state.dataarr,8000,5000,1000,3000,2000],
            })
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
    componentWillMount(){
        let stat= localStorage.getItem("stats");
        stat= JSON.parse(stat);
        this.setState({
            stats:stat,
        })
        //console.log("get for charts");
    }
    render()
    {
        this.collectdata();
        return (
            <div className="ContentArea">
            <div className="contentMsg">  
            <h1 className='farmerWelcome'>Welcome,</h1>
            <p className="farmermsg">{this.username?this.username:"Farmer X"}</p>
            </div>    
            <div className="contentwrapper">  
            <div className="designcover">
                <div className="box1">
                    {this.state.stats.total_Orders} baskets fulfilled 
                </div>
                <div className="box2">
                    {this.state.stats.order_Total} rupees generated! 
                </div>   
            </div>
            <div className="lineChartWrapper">
                <LineChart />
                <h1>Total sales</h1>   
            </div>
            <div className="doughnutWrapper">
                <DoughnutChart dataarr={this.state.dataarr} namearr={this.state.namearr} />
                <h1>Distribution of top selling crops</h1>
            </div>
            </div>
            <div className="subscribe_content">
             <Subscribe />   
            </div>
            <div className="space_bottom"></div>
        </div>
        )
    }
}
export default Farmercenter;