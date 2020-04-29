import React from 'react'
import {Link} from 'react-router-dom' 
import axios from 'axios'
import { render } from '@testing-library/react'
import Modal from 'react-modal';

import './ApiRequest.css'

class ApiRequest extends React.Component {
     state = {
        country : '', 
        languages: '',

     }

    getFlag = () => {
        axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(res=> {
            const countries = res.data;
            this.setState({country: res.data})
            let flag=countries[Math.floor(Math.random()*countries.length)] 
            this.setState({country: flag})
            this.setState({languages: this.state.country.languages[0].name})
        })
        
    }
    componentDidMount(){
        this.getFlag()
    }

    handleOpenModal = () => {
        this.setState({ showModal: true });
    }

    handleCloseModal = () => {
        this.setState({ showModal: false });
    }

    handleCloseAndNewFlag = () =>{
        this.handleCloseModal()
        this.getFlag()
    }

    render() {
        return( 
        <div className="ApiRequestBlock1">
        <img className="ApiRequestImg" src={this.state.country.flag}/>
        <button className="ApiRequestBtn" onClick={this.getFlag}></button>
        <button className="toBeDelated" onClick={this.handleOpenModal}>Open Modal (la modal devra etre declanché par la bonn reponse)</button>

        <Modal className="modal" isOpen={this.state.showModal} contentLabel="Minimal Modal Example">

                    <div className="modalHeader">
                        <h2>WOW!!!</h2>
                    </div>
                    <div className="modalBody">
                        <h3>Congratulations! </h3>
                        <p>This is {this.state.country.name} flag</p>
                        <p> Did you know thw capital is {this.state.country.capital}?</p>
                        <p> And did you know there they speak {this.state.languages}?</p> 
                    </div>
                    <button className="modalBtn-closeModal" onClick={this.handleCloseAndNewFlag}>Close</button>
                </Modal>
        </div>
        )  
    }
}



export default ApiRequest