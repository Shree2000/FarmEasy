import { controllers } from 'chart.js';
import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const DoughnutChart = (props) => {
const data = (canvas)=> 
{
  const ctx = canvas.getContext("2d");
  return{
    responsive:true,
    labels: [...props.namearr],//props.data2
    datasets: 
    [
        {
          label:"Points",
          data: [...props.dataarr], // props.data
          backgroundColor : ['#ffd0cc','#00b7cc','#ff6fa9','#2980b9','#ffe5ee'],
          cubicInterpolationMode:'default',
          lineTension:0.5,
        },   
    ],
  }
}
const options = 
{
  cutoutPercentage: 40,  
  scales: 
  {
    yAxes: [{ticks: {display: false, },  gridLines:{display: false,},},],
    xAxes: [ {ticks:{display: false,},  gridLines:{display: false,},}]
  },
  legend: {display: true,  position: "top",},
}
return <Doughnut className='lineChart' data={data} options={options} />
}

export default DoughnutChart;
