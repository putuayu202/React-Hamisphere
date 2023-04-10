import React from "react";
import northernPic from "./img/northern-hemisphere.png"
import southernPic from "./img/southern-hemisphere.png"

const HemisphereDisplay = ({ latitude }) =>{
    const Hemisphere = latitude > 0 ? 'Northern hemisphere' : 'Southern hemisphere'
    const HemispherePic = latitude > 0 ? northernPic : southernPic;
    return (
        <div>
            Your latitude = {latitude} <br />
            Hey, you are on {Hemisphere} <br />
            <div align ="center">
            <img src={HemispherePic} alt =""/>
            </div>
            
        </div>
    )
}

export default HemisphereDisplay;