import React from 'react';
import  './sidenav.styles.css';
import Identify from '../../utils/Identify';
import Auth from '../../utils/auth';
import {Link , Redirect, withRouter} from 'react-router-dom';
const Sidenav = (props)=>
{
    const Logout = ()=>{
        Identify.removeData();
        sessionStorage.setItem('Auth', "no");
        props.history.push('/');
        localStorage.removeItem('cookieData');
        //cookie destroy
    }

    return (
    <div className="dashboard1_container">
    <div className="dashboard1_logo">
        <Link to='/try' className='dashboard1_logo_link' > 
        FArMEASY
        </Link>
    </div>
    <div className="dashboard1_items">
        <Link  to='/try'className='dashboard1_item'>Dashboard</Link>
        {/* <Link className='dashboard1_item'>About Me</Link> */}
        <Link to='/mycrops' className='dashboard1_item'>My crops</Link>
        <Link to='/postacrop' className='dashboard1_item'>Post a Crop</Link>
        <Link to='/govmntscheme' className='dashboard1_item'>Government Schemes</Link>
        <p className='dashboard1_item' onClick={Logout}>Sign Out</p>
        
    </div>
    <footer className="dashboard1_footer">
        All rights reserved
    </footer>
</div>
)
}

export default withRouter(Sidenav);