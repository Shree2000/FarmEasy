import React from 'react';
import Sidenav from '../../sidenavbar/sidenav.component';
import Farmercenter from '../../farmerCenterContent/farmercentercontent.component';
import Auth from '../../../utils/auth';
// import FarmerRightWrapper from '../../farmer-right-wrapper/farmer-right-wrapper.component';
import Rightimage from '../../right-image/rightimage.component';
class Farmerfirst extends React.Component{
    constructor()
    {
        super()
        console.log(Auth.isAuthenticated());
        this.state={}
    }
    

    render(){
        return <div className="wrapper">
            <Sidenav />
            <Farmercenter />
            {/* <FarmerRightWrapper /> */}
            <Rightimage />
            {/* <FarmerRightWrapper /> */}
        </div>
    }
}
export default Farmerfirst;