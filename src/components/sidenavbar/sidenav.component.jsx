import React from 'react';
import  './sidenav.styles.css';
import {Link} from 'react-router-dom';
const Sidenav = ()=>
{
    return (
    <div className="dashboard1_container">
    <div className="dashboard1_logo">
        <Link to='/' className='dashboard1_logo_link' to='/' > 
        FArMEASY
        </Link>
    </div>
    <div class="dashboard1_items">
        <Link  to='/try'className='dashboard1_item'>Dashboard</Link>
        {/* <Link className='dashboard1_item'>About Me</Link> */}
        <Link to='/mycrops' className='dashboard1_item'>My crops</Link>
        <Link to='/postacrop' className='dashboard1_item'>Post a Crop</Link>
        <Link to='/' className='dashboard1_item'>Government Schemes</Link>
        <p className='dashboard1_item'>Sign Out</p>
        
    </div>
    <footer className="dashboard1_footer">
        All rights reserved
    </footer>
</div>
)
}

export default Sidenav;