import React from 'react';
import Sidenav from '../../sidenavbar/sidenav.component';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import {Button, Row,Col,Form, Container} from 'react-bootstrap';
import './crop_rec.css';
import identity from '../../../utils/Identify';


class Recommend_New extends React.Component{

    constructor()
    {
        super();
        this.state={
            moisture:0,
            temperature:0,
            humidity:0,
            latitude:0,
            longitude:0,
            state1:"",
            fans:"",
            cans:[],
        }
    }
    componentWillMount(){
        let data=sessionStorage.getItem('position');
        data= JSON.parse(data);
        console.log(data);
        this.setState({
            latitude:data.latitude,
            longitude:data.longitude,
        },()=>{
            axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=aa8c98ffd61b2f9e7e48ec3706943f7f&units=imperial`,{})
            .then(response=>{
            this.setState({
                temperature:response.data.main.temp,
                humidity:response.data.main.humidity,
                moisture:24,
            },()=>{console.log(this.state);})
            })
            .catch(err=>{
            console.log(err);
            this.setState({
                temperature:66,
                humidity:52,
                moisture:24,
            }) 
        })
        })
        
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${this.state.latitude}%2C${this.state.longitude}&key=002a746bbd4f4ef8b5c0101f7b814cfd`,{})
        .then(response=>{
            this.setState({
                state1:response.data.results[0].components.state
            },()=>{axios.post(identity.api + 'reco',{
                temperature:this.state.temperature,
                humidity:this.state.humidity,
                moisture:this.state.moisture,
                state:this.state.state1,
            })
            .then(res=>{
                console.log(res.data);
                this.setState({
                fans:res.data.fertilizer,
                cans:res.data.croprec,
            })})
            .catch(err=>{console.log(err);})})
        })
        .catch(err=>{
            console.log(err);
        })
    }


    handlechange = (event)=>{
        const {name,value} =event.target;
        this.setState({[name]:value});
    }

    render(){
       return  <div>
            <Sidenav/>
            <div className="crop_rec_wrapper">
            <h1 className="crop_rec_header">We have the following suggestion based on your location and weather conditions</h1>    
            <div className="crop_rec_button_wrapper">
            <Button  name="croprecom" onClick={this.handleSubmit} variant="success" type="submit">
                Get the results
            </Button>
            </div>    
                <Container fluid>
                <Row>
                   <Col  className="crop_rec_area 1" xs={12} s={12} md={6} lg={6} >
                   <h1 className="croprecheader 2">Fertilizers</h1>
                   <h6>We recommend the following fertilizer</h6>
                   {/* <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>We recommend the following </Form.Label>
                    <Form.Control name="fans" value={this.state.fans} placeholder="Recommended a fertilizer" as="textarea" rows={3} />
                    </Form.Group>
                    </Form> */}
                    <h6>{this.state.fans}</h6>
                    </Col> 
                   

                   <Col className="crop_rec_area 2" xs={12} s={12} md={6} lg={6} >
                   <h1 className="croprecheader 2">Recommend a crop</h1>
                   <h6>We recommend the following crop</h6>
                   {/* <Form>
                   <Form.Group className="form_crop_rec" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>We recommend the following crop</Form.Label>
                    <Form.Control name="cans" value={this.state.cans} placeholder="Recommended a Crop"as="textarea" rows={12} />
                    </Form.Group>
                   </Form> */}
    
                    {this.state.cans.map(item=>{
                        console.log(item);
                        return <h6>{item}</h6>
                    })}
                   
                   </Col>  
                </Row>        
                </Container>   
                </div>
                <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    draggable
                    pauseOnHover={false}
                />
        </div>
    }
}


export default Recommend_New;