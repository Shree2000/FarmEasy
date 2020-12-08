import React, {useState} from 'react';
import './subscribe.css';

 function Subscribe(){
    const [subscribe, setSubscribe] =useState(false);

    function handleClick(){
        if(subscribe===false)
        setSubscribe(true);
        else
        setSubscribe(false);
    }

    return(
        <div className="subscribe_wrapper">
            <div className={`subscribe_box ${subscribe===false?"":"checked"}`} onClick={handleClick}></div>
            <p  onClick={handleClick} className={`subscribe_text ${subscribe===false?"":"checked"}`}>
                {subscribe===false?"Subscribe to latest newsletter":"Unsubscribe from the newsletter"}
            </p>
        </div>
    )
}

export default Subscribe;