


import React,{useState,useEffect,useRef} from "react";
import styles from "./orders.module.css";
import axios from "axios";
import Identity from '../../utils/Identify';
import Razorpay from "razorpay";
import NAV from "../user_landing_page/navbar";
import turf from "turf";
import mapboxgl from 'mapbox-gl';
import SingleOrder from "./single_order";

mapboxgl.accessToken = 'pk.eyJ1IjoibW1hcmF0aGU0MyIsImEiOiJja2lrOXp6cmowN3RyMzBtdzZzcHpsNmo3In0.apsDmPg-MH6nZRUSbggrOg';

function MAP(props)
{

  // const [lat,setlat] = useState(10.25)
  // const [lang,setlang] = useState(76.28)
  // const [endlat,setendlat] = useState(25.91)
  // const [endlang,setendlang] = useState(81.65)
  const [zoom,setzoom] = useState(7)
  const [routepoints,setroutepoints] = useState({'values' : []});

  var routepoints2 =  { keyA : [] };

  // const [state, setState] = useState({
  //   lng: 5,
  //   lat: 34,
  //   zoom: 2
  // });

  // const mapContainer = useRef("");
  // const map = useRef(null);

  // useEffect(() => {
  //   map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: "mapbox://styles/mapbox/streets-v11",
  //     center: [state.lng, state.lat],
  //     zoom: state.zoom
  //   });
  // }, []);

  // useEffect(() => {
  //   map.on('load', () => {
  //     var marker = new mapboxgl.Marker()
  //     .setLngLat([lang,lat])
  //     .addTo(map);
  //   })
  
  // }, []);


  useEffect(() => {


  var url = 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + props.startlang + ',' + props.startlat + ';' + props.endlang + ',' + props.endlat + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken;

    const nightstyle = 'mapbox://styles/mapbox/dark-v10';

  axios.get(url, {

  })
  .then(function (response) {

    const map = new mapboxgl.Map({
      container: mapboxgl.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [props.startlang,props.startlat],
      zoom: zoom
      });
    var marker = new mapboxgl.Marker()
.setLngLat([props.startlang,props.startlat])
.addTo(map);
var marker = new mapboxgl.Marker({
      color: "#FF0000"
      })
.setLngLat([props.endlang,props.endlat])
.addTo(map);
 
    var json = response.data;
    
    var data = json.routes[0];
    var route = data.geometry.coordinates;
    var mid = Math.floor(route.length*0.5);
    var marker = new mapboxgl.Marker({
      color: "#C0C0C0"
      })
.setLngLat([route[mid][0],route[mid][1]])
.addTo(map);
    var marker = new mapboxgl.Marker({
      color: "#FF0000"
      })
.setLngLat([props.endlang,props.endlat])
.addTo(map);
    // if(routepoints2.keyA != route ){
    //   routepoints2.keyA = route;
    // }
    console.log(route)
    // if( route != routepoints ){
          // setroutepoints({'values' : route});
          // var coordarray = response.data.geometry.coordinates;
          // if the route already exists on the map, reset it using setData
          // if (map.getSource('route')) {
          //   map.getSource('route').setData(geojson);
          // } else { // otherwise, make a new request
              map.on('load', function () {
          map.addSource('route', {
          'type': 'geojson',
          'data': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
          'type': 'LineString',
          'coordinates':route
          }
          }
          });
          map.addLayer({
          'id': 'route',
          'type': 'line',
          'source': 'route',
          'layout': {
          'line-join': 'round',
          'line-cap': 'round'
          },
          'paint': {
          'line-color': '#1A73E8',
          'line-width': 4
          }
          });
          });

        

  // }

  })
  .catch(function (error) {
    console.log(error);
  });
  
 

},[props.startlang,props.startlat,props.endlang] );


    
// var map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/streets-v11',
//   zoom: 0
//   });
   
//   var url = 'https://wanderdrone.appspot.com/';
//   map.on('load', function () {
//   var request = new XMLHttpRequest();
//   window.setInterval(function () {
//   // make a GET request to parse the GeoJSON at the url
//   request.open('GET', url, true);
//   request.onload = function () {
//   if (this.status >= 200 && this.status < 400) {
//   // retrieve the JSON from the response
//   var json = JSON.parse(this.response);
   
//   // update the drone symbol's location on the map
//   map.getSource('drone').setData(json);
   
//   // fly the map to the drone's current location
//   map.flyTo({
//   center: json.geometry.coordinates,
//   speed: 0.5
//   });
//   }
//   };
//   request.send();
//   }, 2000);
   
//   map.addSource('drone', { type: 'geojson', data: url });
//   map.addLayer({
//   'id': 'drone',
//   'type': 'symbol',
//   'source': 'drone',
//   'layout': {
//   'icon-image': 'rocket-15'
//   }
//   });

// });  



    return(
      <div>
        <div className={styles.mapouter}>
        
            <div ref={el => mapboxgl.mapContainer = el} className={styles.map}/>

        </div>
        </div>
    )
} 


export default MAP;
