import React from 'react';
import './mycrop.styles.css';
import Sidenav from '../../sidenavbar/sidenav.component';
import Rightimage from '../../right-image/rightimage.component';

class MyCropList extends React.Component{
    constructor(){
        super();

        this.state={}
    }
    render(){
        return (
            <div>
                <Sidenav />
                <Rightimage />
            </div>
        )
    }
}
export default MyCropList;