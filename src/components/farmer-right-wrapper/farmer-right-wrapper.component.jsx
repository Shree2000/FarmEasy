import React from 'react';
import './farmer-right-wrapper.styles.css';


class FarmerRightWrapper extends React.Component{
    constructor(){
        super();

        this.state={}
    }

    render()
    {
        return (
            <div class="Rightwrapper">
                <div class="rightsearch">
                    <input class="rightsearchbar" placeholder="Search here" type="search" name="" id="" />
                </div>
                <div class="topselling">
                    <div class="topbar">
                        <h3>Top selling products</h3>
                        <p>see all</p>
                    </div>
                    <div class="topsellinglist">
                        <div class="listselling">
                            <img src={require('../Aboutus/media/joshua-lanzarini-FGvQKMP-iXY-unsplash.jpg')} alt="" />
                            <h4>Wheat</h4>
                            <p>RS 200</p>
                        </div>
                        <div class="listselling">
                            <img src={require('../Aboutus/media/joshua-lanzarini-FGvQKMP-iXY-unsplash.jpg')} alt="" />
                            <h4>Corn</h4>
                            <p>RS 200</p>
                        </div>
                    <div class="listselling">
                        <img src={require('../Aboutus/media/joshua-lanzarini-FGvQKMP-iXY-unsplash.jpg')} alt="" />
                        <h4>Barley</h4>
                        <p>RS 200</p>
                    </div>
                    <div class="listselling">
                        <img src={require('../Aboutus/media/joshua-lanzarini-FGvQKMP-iXY-unsplash.jpg')} alt="" />
                        <h4>Buchwheat</h4>
                        <p>RS 200</p>
                    </div>
                </div>
            </div>
            <div class="right-bottom">
                <div>
                    <h3>Unique Visitors</h3>
                    <p>Weekly</p>
                </div>
            </div>
        </div>
        )
    }
}
export default FarmerRightWrapper;