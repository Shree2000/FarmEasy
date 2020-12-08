import React from 'react';

import Sidenav from '../../sidenavbar/sidenav.component';
import Rightimage from '../../right-image/rightimage.component';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FarmerRightWrapper from '../../farmer-right-wrapper/farmer-right-wrapper.component';
import './farmerupload.styles.css';
 import Button from 'react-bootstrap/Button';
 import Auth from '../../../utils/auth';
 import Form from 'react-bootstrap/Form';
 import axios from 'axios';
 import Modal from 'react-bootstrap/Modal';
 import Identify from '../../../utils/Identify';

class FarmerUpload extends React.Component{
    constructor()
    {
        super()
        //console.log(Auth.isAuthenticated());
        this.state={
            cropName:'Buckwheat',
            cropPhoto:'',
            cropQuantity:'',
            cropPrice:'',
            cropDescription:'',
            cropHarvest:'',
        }
    }
    handleShow = () => this.setState({show:true});
    handleClose = () => this.setState({show:false});
    showhandle=()=>{
        this.handleShow();
    }
    handleChange= event =>{

        const {name,value} =event.target;
        this.setState({[name]:value});
    }
    handleSubmit=event=>{
        event.preventDefault();
        let farmerName= localStorage.getItem('cookieData');
        farmerName=JSON.parse(farmerName);
        let cropData={
            availability: this.state.cropQuantity,
            description:this.state.cropDescription,
            price:this.state.cropPrice,
            harvestseason: this.state.cropHarvest,
            imageurl:'abcd',
            productcategory:this.state.cropName,
            sellername:farmerName.username,
        }
        console.log(cropData);  
        axios.post('http://149107dd4efc.ngrok.io/addproduct',cropData)
          .then( response => {
            console.log(response.data);
            if(response.data.message!="Product Category already exists") toast.success("Product has been added!");
            else{
                toast.warning("Product already exists");
            }
          })
          .catch(function (error) {
            console.log(error);
            toast.error("Try adding again!");
          });
        this.setState({
            cropName:'Buckwheat',
            cropPhoto:'',
            cropQuantity:'',
            cropPrice:'',
            cropDescription:'',
            cropHarvest:'',
        },()=>{
            console.log(this.state);     
        });   
       // (this.success && this.showhandle());
    }

    render()
    {
        return (

            <div className="wrapper">
                <Sidenav />
                <div className="contentArea">
                <h1 className='farmerWelcome'>Upload a crop,</h1>
                <p className='farmermsg2'>Farmer X</p>
                <div className="formWrapper">
                    <Form onSubmit={this.handleSubmit}>
                    <Form.Label>Select the crop</Form.Label>
                    <Form.Control  value={this.state.cropName} onChange={this.handleChange} name='cropName' as="select" label="select your crop">
                    <option>Buckwheat</option>
                    <option>Maize</option>
                    <option>Barley</option>
                    <option>Wheat</option>
                    <option>Rice</option>
                    </Form.Control>
                    <Form.Group>
                    <Form.File name='cropPhoto' value={this.state.cropPhoto} onChange={this.handleChange} id="exampleFormControlFile1" label="Upload a picture of the crop" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm1.ControlInput1">
                    <Form.Label>Quantity Available</Form.Label>
                    <Form.Control name='cropQuantity' value={this.state.cropQuantity} onChange={this.handleChange} type="text" placeholder="Total Kilograms to sell" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Price per Kg</Form.Label>
                    <Form.Control name='cropPrice'  value={this.state.cropPrice} onChange={this.handleChange} type="text" placeholder="price/kg" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm2.ControlTextarea1">
                    <Form.Label>Farm Description</Form.Label>
                    <Form.Control name='cropDescription' value={this.state.cropDescription} onChange={this.handleChange} as="textarea" rows={2} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput3">
                    <Form.Label>Harvest Season</Form.Label>
                    <Form.Control name='cropHarvest'  value={this.state.cropHarvest} onChange={this.handleChange} type="text" placeholder="Harvest Season" />
                    </Form.Group>
                    <Button onSubmit={this.handleSubmit} variant="success" type="submit">
                    Submit
                    </Button>
                    </Form>
                </div>
                </div>
                {/* <FarmerRightWrapper /> */}
                <Rightimage />
                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                <Modal.Header closeButton>
                <Modal.Title>Crop already exists</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    The crop you tried to add already exists. Do you want to change your entry?
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                <Button variant="success">Yes, Replace it!</Button>
                </Modal.Footer>
                </Modal>
                <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    draggable
                />
                </div>
        )
    }
}
export default FarmerUpload;