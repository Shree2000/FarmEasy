import React from 'react';


const Spinner = ()=>{


    return (
        <div className="spinner_wrapper">
            <svg xmlns="http://www.w3.org/2000/svg"  className="styleobj" width="150px" height="150px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <path fill="none" stroke="#77a058" strokeWidth="7" strokeDasharray="42.76482137044271 42.76482137044271" d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z" strokeLinecap="round" className="spinner_path">
            <animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0;256.58892822265625"></animate>
            </path>
            </svg>
        </div>
    )
}

export default Spinner
// preserveAspectRatio="xMidYMid"
{/* <svg xmlns="http://www.w3.org/2000/svg"  className="styleobj"  viewBox="0 0 140 140" >
<path fill="none" stroke="#157759" stroke-width="4" stroke-dasharray="42.76482137044271 42.76482137044271" d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z" stroke-linecap="round" className="spinner_path">
<animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="2s" keyTimes="0;1" values="0;256.58892822265625"></animate>
</path>
</svg> */}