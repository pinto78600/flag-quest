import React from 'react'

import axios from 'axios'
import { render } from '@testing-library/react'

import './ApiRequest.css'

class ApiRequest extends React.Component {
     state = {
        flag : '', 
        name:'',
        capital: '',
        region: '',
        languages: [],
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
        <div className="ApiRequestBlock1">
        <img className="ApiRequestImg" src={this.state.flag.flag}/>
        <button className="ApiRequestBtn" onClick={this.getFlag}></button>
        </div>
        )
        
    }
}



export default ApiRequest