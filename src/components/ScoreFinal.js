import React from "react"
import "./ScoreFinal.css"


class ScoreFinal extends React.Component {
    state={
        text : ""
    }
    
componentDidMount(){
    if(this.props.point < 3){
        this.setState({text : ("tu es nul")})
    }else{
        this.setState({text : ("tu es fort")})
    }
        
    
}    
    
    
    render(){
    const point = this.props.point
    return(
        <div className="scoreFinal" >
            <p>YOUR SCORE !!</p>
            <p>{point}/5</p>
    <p onChange={this.componentDidMount}>{this.state.text}</p>
        </div>
    )
}
}
export default ScoreFinal