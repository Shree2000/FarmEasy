import { controllers } from 'chart.js';
import React from 'react'
import { Line, Pie, Doughnut } from 'react-chartjs-2'

const LineChart = (props) => {


  const data = (canvas)=> 
  {
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createLinearGradient(0, 0, 0, 300);
      gradient.addColorStop(0, 'rgba(122, 215, 240)');
      gradient.addColorStop(0.4, 'rgba(146, 223, 243)');
      gradient.addColorStop(0.6, 'rgba(183, 233, 247)');
      gradient.addColorStop(0.75, 'rgba(219, 243, 250)');
      gradient.addColorStop(1, 'rgba(245, 252, 255)');
      return{
          labels: ['Jan-Feb',  'Mar-Apr', 'May-Jun', 'Jul-Aug', 'Sept-Oct','Nov-Dec'], //props data
          datasets: 
          [
              {
                  label:"current yr",
                  data: [8000,5000,1000,3000,2000,4500], //props data
                  fill: false,
                  backgroundColor : gradient,
                  cubicInterpolationMode:'default',
                  lineTension:0.5,
                  borderColor:"rgb(122,215,240)",
                  borderWidth:4
              },
              {
                  label:"last year",
                  data: [4000,6000,3000,7000,9000,5525],
                  fill: false,
                  backgroundColor : "#FFE5EE",
                  cubicInterpolationMode:'default',
                  lineTension:0.5,
                  borderColor:"#FFE5EE",
                  borderWidth:4
              },
          ],
      }
  }


  const options = {
    responsive:true,
    scales: {
      yAxes: [
        {
          ticks: {
            padding:25,
            fontSize:16,
            margin:10,
            fontColor:"#42427d",
          },
          gridLines: {
              display: false,    
          },    
        },
      ],
      xAxes:[
          {
              ticks:{
                  padding:25,
                  fontSize:16,
                  margin:10,
                  fontColor:"#42427d",
              },
              gridLines: {
                  display: false,
              }
          }
      ]
    },
    legend: {
      display: true,
      position: "top",
    },
  }


    
  return  <Line className='lineChart' data={data} options={options} />
    
}

export default LineChart;
