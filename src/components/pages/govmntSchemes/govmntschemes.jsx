import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './govmntschemes.css';

class GovernmentSchemes extends Component{
    constructor(){
        super();
        this.state={

        }
    }


    render(){
        return (
            <div className="gov_scheme_wrapper">
                <Container fluid className='gov_scheme_cont'>
                    <Row>
                    <Col className="gov_scheme_index" md={2} lg={2}>1 of 2</Col>
                    <Col className="gov_scheme_content" md={10} lg={10}>2 of 2</Col>
                    </Row>
                </Container>
            </div>

        )
    }
}

export default GovernmentSchemes;