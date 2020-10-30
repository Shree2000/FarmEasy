import React from 'react';

import Sidenav from '../../sidenavbar/sidenav.component';
import Rightimage from '../../right-image/rightimage.component';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FarmerRightWrapper from '../../farmer-right-wrapper/farmer-right-wrapper.component';
import './farmerupload.styles.css';
 import Button from 'react-bootstrap/Button';
 import Form from 'react-bootstrap/Form';
 import Modal from 'react-bootstrap/Modal';
 import Identify from '../../../utils/Identify';

class FarmerUpload extends React.Component{
    constructor()
    {
        super()
        this.state={
            cropName:'',
            cropPhoto:'',
            cropQuantity:'',
            cropPrice:'',
            cropLocation:'',
            show:false
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
    success=true;
    handleSubmit=event=>{
        event.preventDefault();
        console.log(this.success, this.cropAdded);  
        axios.post('http://7137aa5b1a55.ngrok.io/register',{
            availability: this.state.cropQuantity,
            description:"Potato",
            price:this.state.cropPrice,
            harvestseason:"Summer",
            imageurl:'abcd',
            productcategory:this.state.cropName,
            sellername:Identify.username
        })
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
        this.setState({
            cropName:'',
            cropPhoto:'',
            cropQuantity:'',
            cropPrice:'',
            cropLocation:''
        });   
        console.log(this.state);     
       //toast.success("Product has been added!");
        //toast.error("Try adding again!");
        (this.success && this.showhandle());
    }

    render()
    {
        return (

            <div className="wrapper">
                <Sidenav />
                <div className="contentArea">
                <h1>Upload a crop,</h1>
                <p className='farmermsg'>Farmer X</p>
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
                    <Form.Label>Farm Location</Form.Label>
                    <Form.Control name='cropLocation' value={this.state.cropLocation} onChange={this.handleChange} as="textarea" rows={2} />
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