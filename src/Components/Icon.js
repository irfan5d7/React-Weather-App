import React from 'react'
const Icon = (props) => {
    const url = "http://openweathermap.org/img/wn/"+props.value+".png" ;
    console.log(url)
    return(
        <img 
        className = "icon"
        src =  {url}
        alt = 'new' 
        />
    );
}

export default Icon