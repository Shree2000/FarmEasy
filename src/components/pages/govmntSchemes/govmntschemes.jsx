import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidenav from '../../sidenavbar/sidenav.component';

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
                <Sidenav/>
                <div className="schemes_maincontent">
                    <h1 className="schemes_header">Government Schemes</h1>
                </div>
            </div>

        )
    }
}

export default GovernmentSchemes;