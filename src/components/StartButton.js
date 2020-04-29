import React from "react"

import "./StartButton.css"



class StartButton extends React.Component{
    render(){
        return (
            <div className="StartButton-body" >
            <a className="StartButton-inside"  href='#'>
                <span>Start</span>
            </a>
</div>
        )
    }
}
export default StartButton