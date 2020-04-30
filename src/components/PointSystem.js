import React from 'react'
import './PointSystem.css'

const PointSystem = props =>{

return(
    <div className="scoreSystem">
        <p>Your score is {props.point} points  </p>
        <button onClick={props.validateReponse} >valider</button>
    </div>
    
)}

;
export default PointSystem