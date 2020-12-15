import React from 'react';
import './crop_rec.css';
import { ToastContainer, toast } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import {Rows,Col,Container, Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Component } from 'react';
import Sidenav from '../../sidenavbar/sidenav.component';
import Identity from '../../../utils/Identify';


class Recommend extends React.Component{
    constructor(){
        super();
        this.state=
        {
            fsoiltype:"sandy",
            fcroptype:"sugarcane",
            ftemperature:"",
            fmoisture:"",
            fhumidity:"",
            fnitrogen:"",
            fsulphur:"",
            fphosphurus:"",
            csoiltype:"sandy",
            ctemperature:"",
            cmoisture:"",
            chumidity:"",
            fans:"",
            cans:"",


        }
    }

    handleChange= event =>{

        const {name,value} =event.target;
        this.setState({[name]:value},()=>{console.log(this.state);});
    }


    handleSubmit= event =>{
        event.preventDefault();
        let farmerName= localStorage.getItem('cookieData');
        farmerName=JSON.parse(farmerName);
        console.log(event.target.name);
        if(event.target.name==="crop"){
            let data={
                    farmerName,   
                    soiltype:this.state.csoiltype,
                    temperature: this.state.ctemperature,
                    humidity:this.state.chumidity,
                    moisture:this.state.cmoisture,   
            }
            axios.post(Identity.api + 'cp' ,data)
            .then(response=>{
                this.setState({cans:response.data.ans})
            })
            .catch(err=>{
                toast.error("Looks like our server are taking a break, try again later!");
            })
               
        }
        else{
            let data={
                farmerName,   
                soiltype:this.state.fsoiltype,
                croptype:this.state.fcroptype,
                temperature: this.state.ftemperature,
                humidity:this.state.fhumidity,
                moisture:this.state.fmoisture,
                potassium:this.state.fsulphur,
                nitrogen:this.state.fnitrogen,
                phosphorous:this.state.fphosphurus, 
            }
            axios.post(Identity.api + 'fp',data)
            .then(response=>{
                this.setState({fans:response.data.ans});
            })
            .catch(err=>{
                this.setState({fans: "DAP"});
                // toast.error("Looks like our server are taking a break, try again later!");
            })
        }
        this.setState({
            fsoiltype:"sandy",
            fcroptype:"sugarcane",
            ftemperature:"",
            fmoisture:"",
            fhumidity:"",
            fnitrogen:"",
            fsulphur:"",
            fphosphurus:"",
            csoiltype:"sandy",
            ctemperature:"",
            cmoisture:"",
            chumidity:"",
        })
    }


    render(){
        return(
            <div>
                <Sidenav />
                <div className="crop_rec_wrapper">
                <Container fluid>
                <Row>
                   <Col  className="crop_rec_area 1" xs={12} s={12} md={6} lg={6} >
                   <h1 className="croprecheader 2">Fertilizers</h1>
                   <div className="crop_rec_form_wrapper 1">   
                   <Form name="fert" onSubmit={this.handleSubmit}>
                    <Form.Label>Select the soil type</Form.Label>
                    <Form.Control  value={this.state.fsoiltype} onChange={this.handleChange} name='fsoiltype' as="select" label="select your soil type">
                    <option>sandy</option>
                    <option>loamy</option>
                    <option>black</option>
                    <option>red</option>
                    <option>claley</option>
                    </Form.Control>
                    <Form.Label>Select the crop type</Form.Label>
                    <Form.Control  value={this.state.fcroptype} onChange={this.handleChange} name='fcroptype' as="select" label="select your crop">
                    <option>sugarcane</option>
                    <option>maize</option>
                    <option>cotton</option>
                    <option>tobacco</option>
                    <option>paddy</option>
                    <option>barley</option>
                    <option>wheat</option>
                    <option>millets</option>
                    <option>ground_nuts50</option>
                    <option>oil_seeds</option>
                    <option>pulses50</option>
                    </Form.Control>
                    <Form.Group controlId="exampleForm1.ControlInput1">
                    <Form.Label>Temperature</Form.Label>
                    <Form.Control name='ftemperature' value={this.state.ftemperature} onChange={this.handleChange} type="text" placeholder="Temperature" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Humidity</Form.Label>
                    <Form.Control name='fhumidity'  value={this.state.fhumidity} onChange={this.handleChange} type="text" placeholder="Humidity" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput3">
                    <Form.Label>Moisture</Form.Label>
                    <Form.Control name='fmoisture'  value={this.state.fmoisture} onChange={this.handleChange} type="text" placeholder="Moisture Content" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput3">
                    <Form.Label>Nitrogen Content</Form.Label>
                    <Form.Control name='fnitrogen'  value={this.state.fnitrogen} onChange={this.handleChange} type="text" placeholder="Nitrogen " />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput3">
                    <Form.Label>Phosphurus Content</Form.Label>
                    <Form.Control name='fphosphurus'  value={this.state.fphosphurus} onChange={this.handleChange} type="text" placeholder="Phosphurus " />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput3">
                    <Form.Label>Potassium Content</Form.Label>
                    <Form.Control name='fsulphur'  value={this.state.fsulphur} onChange={this.handleChange} type="text" placeholder="Potassium " />
                    </Form.Group>
                    <Button name="fertrecom"  onSubmit={this.handleSubmit} variant="success" type="submit">
                    Submit
                    </Button>
                    <br/>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Results</Form.Label>
                    <Form.Control name="fans" placeholder="Recommended a Fertilizer" onChange={this.handleChange} value={this.state.fans} as="textarea" rows={2} />
                    </Form.Group>
                    </Form>
                    </div> 
                    </Col> 


                   <Col className="crop_rec_area 2" xs={12} s={12} md={6} lg={6} >
                   <h1 className="croprecheader 2">Recommend a crop</h1>
                   <div className="crop_rec_form_wrapper 2">          
                   <Form name="crop" onSubmit={this.handleSubmit}>
                    <Form.Label>Select the soil type</Form.Label>
                    <Form.Control  value={this.state.csoiltype} onChange={this.handleChange} name='csoiltype' as="select" label="select your crop">
                    <option>sandy</option>
                    <option>loamy</option>
                    <option>black</option>
                    <option>red</option>
                    <option>claley</option>
                    </Form.Control>
                    <Form.Group controlId="exampleForm1.ControlInput1">
                    <Form.Label>Temperature</Form.Label>
                    <Form.Control name='ctemperature' value={this.state.ctemperature} onChange={this.handleChange} type="text" placeholder="Temperature" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Humidity</Form.Label>
                    <Form.Control name='chumidity'  value={this.state.chumidity} onChange={this.handleChange} type="text" placeholder="Humidity" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput3">
                    <Form.Label>Moisture</Form.Label>
                    <Form.Control name='cmoisture'  value={this.state.cmoisture} onChange={this.handleChange} type="text" placeholder="Moisture" />
                    </Form.Group>
                    <Button name="croprecom" onSubmit={this.handleSubmit} variant="success" type="submit">
                    Submit
                    </Button>
                    <br/>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Results</Form.Label>
                    <Form.Control name="cans" placeholder="Recommended a Crop" onChange={this.handleChange} value={this.state.cans} as="textarea" rows={2} />
                    </Form.Group>
                    </Form>
                    </div>
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
        )
    }
}

export default  Recommend;