import React from 'react'

import axios from 'axios'
import { render } from '@testing-library/react'

class ApiRequest extends React.Component {
     state = {
        flag : ''
     }

    getFlag = () => {
        axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(res=> {
            const countries = res.data;
            this.setState({flag: res.data})
            console.log(this.state)
            let flag=countries[Math.floor(Math.random()*countries.length)] 
            console.log(flag)
            this.setState({flag: flag})
        })
        
    }
    componentDidMount(){
        this.getFlag()
    }

    render() {
        return( 
        <div>
        <button onClick={this.getFlag}>click</button>
        <img src={this.state.flag.flag}/>
        </div>
        )
        
    }
}



export default ApiRequest