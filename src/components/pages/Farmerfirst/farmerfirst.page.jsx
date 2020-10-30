import React from 'react';
import Sidenav from '../../sidenavbar/sidenav.component';
import Farmercenter from '../../farmerCenterContent/farmercentercontent.component';
import FarmerRightWrapper from '../../farmer-right-wrapper/farmer-right-wrapper.component';
import Rightimage from '../../right-image/rightimage.component';
class Farmerfirst extends React.Component{
    constructor()
    {
        super()

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