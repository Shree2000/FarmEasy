import React from 'react';
import './aboutus.styles.css';
import {Link} from 'react-router-dom';

const Aboutus = ()=>
{

    return (
        <div className="about_section">
        <div className="inner_container">
            <h1>About Us</h1>
            <p className="text">
                This forum aims to bridge the gap between the farmers and the retail world all the while enriching the farming experience for the farmers. A single stop database for all government schemes as well as latest technological updates, this platform at the fingertips will revolutionize agriculture. Learn more...
            </p>
            <div className="users">
                <span> <Link  className="link" to='/'>Home Page</Link></span>
                <span><Link className="link" to='/'>Existing User?</Link></span>
                <span><Link className="link" to='/'>New user?</Link></span>
            </div>
        </div>
    </div>
    ) 
}

export default Aboutus;