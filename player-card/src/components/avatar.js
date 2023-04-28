import React from "react";

function Avatar(){
    return(
        
            <img 
            src={process.env.PUBLIC_URL + '/static/images/Bukayo_Saka.png'} 
            className='img-fluid rounded'
            alt="Bukayo Saka Profile Pic" 
            width='120px'/>
        
    )
}

export default Avatar;