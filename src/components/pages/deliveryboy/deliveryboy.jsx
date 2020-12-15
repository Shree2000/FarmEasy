import React from 'react';
import axios from 'axios';
import {Jumbotron,Button} from 'react-bootstrap'

function Deliveryboi(){
    //get
    navigator.geolocation.getCurrentPosition((pos)=>{
        axios.post("http://92b4980dd7e1.ngrok.io/logistics", {
            latitude: pos.coords.latitude,
            longitude:pos.coords.longitude,
        })
        .then(res=>{console.log(res);})
        .catch(err=>{console.log(err);})
    }, (err)=>{console.log(err);}, {enableHighAccuracy: true,timeout: 5000,maximumAge: 0});

    return(
        <div>
            <Jumbotron fluid>
            <h1>Welcome delivery guy</h1>
            <p>
             Modal front end for delivery boy and services provided by logistic services. 
            </p>
            <p>
            <Button variant="success">Click here for recording location</Button>
            </p>
            </Jumbotron>
        </div>
    )
}

export default Deliveryboi