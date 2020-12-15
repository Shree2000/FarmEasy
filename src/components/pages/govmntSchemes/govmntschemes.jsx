import React, { Component } from 'react';
import { Container, Row,  Button,Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import Table from 'react-bootstrap/Table';
import Sidenav from '../../sidenavbar/sidenav.component';
import './govmntschemes.css';
import Axios from 'axios';
import Spinner from '../../../utils/spinner/spinner'

class GovernmentSchemes extends Component{
    constructor()
    {
        super();
        this.state={
            tableshow:false,
            count:0,
            modalshow:false,
            title:"",
            desc:"",
            link:"",
            arr:[],
            spinner:true,
        }
        Axios.post("http://c421d8af2723.ngrok.io/gs", {state:"Maharashtra"})
        .then(response=>{
            console.log(response.data.ans);
            this.setState({
                arr:[...this.state.arr, ...response.data.ans],
                tableshow:true,
                spinner:false,
            })
        })
        .catch(err=>{
            toast.error("Looks like our server are taking a break, try again later!");
            this.setState({spinner:false})
        })
    }


    handleClose = () => this.setState({modalshow:false});
    handleShow = () => this.setState({modalshow:true});
    
    handleClick= (event)=>{
        let id1=event.target.getAttribute("data-val");
        let title,body;
        this.state.arr.forEach(item=>{
            if(id1===item[0]){
                title=item[0];
                body=item[1];
            }
        })
        this.setState({
            title:title,
            desc:body,
        })
        this.handleShow();
    }

    render(){
        let id=0;
        return (
            <div className="gov_scheme_wrapper">
                <Sidenav/>
                <div className="schemes_maincontent">
                <h1 className="schemes_header">Government Schemes</h1>
                <div className="scheme_table_wrapper">
                <Table striped bordered hover variant="dark">
                    {this.state.tableshow &&(<thead>
                        <tr>
                        <th>scheme Number</th>
                        <th>Scheme Name</th>
                        <th>Scheme details</th>
                        </tr>
                    </thead>)}
                    <tbody>
                        {this.state.arr.map(arritem=>{
                            id=id+1;
                            return(
                                <tr>
                                    <td>{id}</td>
                                    <td>{arritem[0]}</td>
                                    <td>{arritem[1].substr(0,100)}...<span name={arritem.id} data-val={arritem[0]}  onClick={this.handleClick} className="scheme_table_span">Read More</span></td>
                                </tr>
                            )
                        })} 
                    </tbody>
                </Table>
                </div>
                <Modal show={this.state.modalshow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>{this.state.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                        {this.state.desc}
                        <br/>
                        <a href="https://www.soilhealth.dac.gov.in/" target="_blank" >Apply here</a>
                        </div>
                    
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
                </div>
                <ToastContainer
                    position="bottom-right"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    draggable
                    pauseOnHover={false}
                />
                <div className="spinner_wrap">
                { this.state.spinner && <Spinner/>}
                </div>
            </div>

        )
    }
}

export default GovernmentSchemes;