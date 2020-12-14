import React from 'react';
import './error404.styles.css';
import Button from 'react-bootstrap/Button';
import Background from '../../../images/error.jpg';
import {withRouter} from 'react-router-dom';
import Auth from '../../../utils/auth';

const Error404Page = (props)=>{

    const handleSubmita = ()=>
    {
        let farmerName= localStorage.getItem('cookieData');
        farmerName=JSON.parse(farmerName);
        if(sessionStorage.getItem('Auth')==='yes'){
            if(farmerName.usertype==="Farmers")
            props.history.push('/try');
            else
            props.history.push('/user');
        }else{
            props.history.push('/');
        }
    }
    
    return (
        <div className="errorWrapper" style={{background: `url(${Background})`}} >
            <div className="errorContent">
                <h2 className="errorHeader">Uh oh!</h2>
                <p>Error 404! You have entered a magical realm of space that doesn't exist.</p>
                <Button onClick={handleSubmita} className='errorButton' variant="success" >
                Go Back!
                </Button>
            </div>
        </div>
    )
}
export default withRouter(Error404Page);

