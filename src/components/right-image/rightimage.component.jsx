import React from 'react';
import './rightimage.styless.css';
import rightimage from '../../images/rightree.png';
 const Rightimage = ()=>{
    return (
        <div className='treediv'>
            <img className='righttree' src={rightimage} alt="tree"/>
            <div className='hidingdiv'></div>
        </div>
        
    )
}
export default Rightimage;