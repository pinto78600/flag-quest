import React from "react"
import "./ScoreFinal.css"


class ScoreFinal extends React.Component {
    state={
        text : ""
    }
  
    render(){
    const point = this.props.point
    return(
        <div className="scoreFinal" >
            <p className="scoreFinalP">YOUR SCORE !!</p>
            <p className="scoreFinalP">{point}/5</p>
        </div>
    )
}
}
export default ScoreFinal