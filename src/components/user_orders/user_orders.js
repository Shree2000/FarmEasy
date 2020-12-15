import React,{useState,useEffect,useRef} from "react";
import styles from "./orders.module.css";
import axios from "axios";
import Identity from '../../utils/Identify';
import Razorpay from "razorpay";
import NAV from "../user_landing_page/navbar";
import turf from "turf";
import mapboxgl from 'mapbox-gl';
import SingleOrder from "./single_order";
import MAP from "./map2";
mapboxgl.accessToken = 'pk.eyJ1IjoibW1hcmF0aGU0MyIsImEiOiJja2lrOXp6cmowN3RyMzBtdzZzcHpsNmo3In0.apsDmPg-MH6nZRUSbggrOg';

function Orders(props)
{

  const [startlat,setstartlat] = useState(10.25)
  const [startlang,setstartlang] = useState(76.28)
  const [endlat,setendlat] = useState(25.91)
  const [endlang,setendlang] = useState(81.65)
  const [zoom,setzoom] = useState(7)
  const [routepoints,setroutepoints] = useState({'values' : []});
  const [orders,setorders] = useState([]);
  const [orderid,setorderid] = useState("");
  const [routearr,setroutearr] = useState([]);
  var routepoints2 =  { keyA : [] };

  let userData= JSON.parse(localStorage.getItem('cookieData'));

  function getroutearray(coords1,coords2){
    var url = 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + coords1[0] + ',' + coords1[1]  + ';' + coords2[0]  + ',' + coords2[1]  + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken;
    axios.get(url, {
      
    })
    .then(function (response) {
      var json = response.data;
      var data = json.routes[0];
      var route = data.geometry.coordinates;
      console.log(route);
      setroutearr(route);
    })

  }

  useEffect(() => {

    const apiurl = Identity.api + 'uo'
    axios.post(apiurl, {
      "customername" : userData.username,
    })
    .then(function (response) {
      console.log("abcd");
      console.log(response.data.ans[0]);
      setorders(response.data.ans);
      setorderid(response.data.ans[0][0])
      // console.log(response.data.ans[0][1][0].toFixed(2));
      setstartlang(response.data.ans[0][1][0]);
      setstartlat(response.data.ans[0][1][1]);
      setendlang(response.data.ans[0][2][0]);
      setendlat(response.data.ans[0][2][1]);
      getroutearray(response.data.ans[0][1],response.data.ans[0][2]);
    })
    .catch(function (error) {
      console.log(error);
    });

  }, []);


  const [state, setState] = useState({
    lng: 5,
    lat: 34,
    zoom: 2
  });

  
  function setcoords(fisrtarr,secondarr){
    console.log(fisrtarr);
    console.log(secondarr);
    setstartlang(fisrtarr[0]);
    setstartlat(fisrtarr[1]);
    setendlang(secondarr[0]);
    setendlat(secondarr[1]);
    getroutearray(fisrtarr,secondarr);
  }


    return(
        <div className={styles.orderspage}>
            
          <NAV />
          <MAP className={styles.ordermap} startlat={startlat} startlang={startlang} endlat={endlat} endlang={endlang} orderid={orderid} routearr={routearr} />

            <div className={styles.singlecards}>
              { orders.map( (oneorder) => {
                  let status;
                  if( oneorder[6] == "Not Delivered yet" ){
                    status = false;
                  }else{
                    status = true ;
                  }
                  return( <SingleOrder orderid = {oneorder[0].slice(6,11)} status={status} price={oneorder[4]} address={oneorder[3]} setter={setcoords} firstcoords={oneorder[1]} secondcoords={oneorder[2]} /> );
                })
              }

            </div>

        </div>
    )
} 


export default Orders;
