import React from 'react'
import './PointSystem.css'

const PointSystem = props =>{

return(
    <div className="scoreSystem">
        <p  >Your score is {props.point} points  </p>
        <button className="pointSystemBtn" onClick={props.validateReponse}></button>
    </div>
    
)}

;
export default PointSystem