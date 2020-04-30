import React from "react"

import "./StartButton.css"
import { NavLink } from "react-router-dom"



class StartButton extends React.Component{
    render(){
        return (
            <div className="StartButton-body" >
            <NavLink to={{ pathname : '/quiz'}}><a className="StartButton-inside"  href='#'>
                <span>Start</span>
            </a></NavLink>
</div>
        )
    }
}
export default StartButton