import React, { useState, useEffect } from "react";
import ReactMapGL, { FlyToInterpolator, Marker, Popup } from "react-map-gl";
import * as parkDate from "./skateboard-parks.json";
import styles from "./orders.module.css";
import { lineString } from "turf";
import DeckGL from '@deck.gl/react';
import {PathLayer,GeoJsonLayer} from '@deck.gl/layers';

export default function MAP(props) {

  const [lat1,setlat1] = useState(20.55)
  const [long1,setlong1] = useState(78.10)
  const [lat2,setlat2] = useState(19)
  const [long2,setlong2] = useState(72)
  const [midlat,setmid] = useState(20.55)
  const [midlong,setmidlong] = useState(78.10)
  const [i,seti] = useState(0);

  // console.log("middle")
  // console.log(midlat,midlong)

  const [viewport, setViewport] = useState({
    latitude: lat1,
    longitude: long1,
    width: "100vw",
    height: "100vh",
    zoom: 3,
    // zoom: 10,
    transitionDuration : 500,
    transitionInterpolar : new FlyToInterpolator(),
    transitionEasing : t => t*(2-t)
  });

 

  

  useEffect(() => {
    console.log("using effect");
    setlat1(props.startlat);
    setlong1(props.startlang);
    setlat2(props.endlat);
    setlong2(props.endlang);
    setViewport(viewport);
    if(props.routearr.length > 0 ){
    var middle = Math.floor(props.routearr.length*0.5);
    console.log("printing");
    console.log(middle);
    if( i > middle ){
      seti(0);
    }
    setmid(props.routearr[middle+i][1]);
    setmidlong(props.routearr[middle+i][0]);


  }
  });

  function refreshhandler(event){
    // event.preventDefault();
    console.log("clicked");
    seti(i+1);
    var middle = Math.floor(props.routearr.length*0.5);
    console.log("printing");
    console.log(middle);
    if( i + middle +1 == props.routearr.length -1 ){
      seti(0);
      setmid(props.routearr[middle][1]);
      setmidlong(props.routearr[middle][0]);
    }else{
      setmid(props.routearr[middle+i][1]);
      setmidlong(props.routearr[middle+i][0]);
    }
    
        // axios.post(apiurl, {
    //   "customername" : userData.username,
    // })
    // .then(function (response) {
      
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }

  const token = 'pk.eyJ1IjoibW1hcmF0aGU0MyIsImEiOiJja2lrOXp6cmowN3RyMzBtdzZzcHpsNmo3In0.apsDmPg-MH6nZRUSbggrOg';



  const layer = new GeoJsonLayer({
    id: 'geojson-layer',
    data : {
      'type': 'Feature',
      'properties': {
        color : '#ff0000',
      },
      'geometry': {
      'type': 'LineString',
      'coordinates': props.routearr,
    }
  },
    pickable: true,
    stroked: false,
    filled: true,
    extruded: true,
    lineWidthScale: 20,
    lineWidthMinPixels: 2,
    getFillColor: [160, 160, 180, 200],
    getLineColor: d => [21, 62, 144],
    getRadius: 100,
    getLineWidth: 2,
    getElevation: 30
  })

  return (
    <div   className={styles.map}>
              <button onClick={refreshhandler} className={styles.rebutton}><i class="fa fa-refresh" aria-hidden="true"></i>
</button>

      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={token}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      
      >
          <Marker
            latitude={lat1}
            longitude={long1}
          >
            <div className={styles.markerpoint1}> 

            </div>
                            {/* <img src="/skateboarding.svg" alt="Skate Park Icon" /> */}
        </Marker>
        <Marker
            latitude={lat2}
            longitude={long2}
          >
            <i className={"fa fa-map-marker "+styles.mapdest}  aria-hidden="true"></i>
                            {/* <img src="/skateboarding.svg" alt="Skate Park Icon" /> */}
        </Marker>
        <Marker
            latitude={midlat}
            longitude={midlong}
          >
                        <i className={"fas fa-truck "+styles.maptruck}  aria-hidden="true"></i>

                            {/* <img src="/skateboarding.svg" alt="Skate Park Icon" /> */}
        </Marker>
        {/* <PolyLine positions={[
          [lat1,long1],
          [lat2,long2]
        ]}  /> */}
        
        <DeckGL viewState={viewport}
    layers={[layer]}
    getTooltip={({object}) => object && (object.properties.name || object.properties.station)} />

      </ReactMapGL>
    </div>
  );
}