import React from 'react'
import {Link} from 'react-router-dom' 
import axios from 'axios'
import { render } from '@testing-library/react'
import Modal from 'react-modal';
import ChampReponse from './ChampReponse';

import './ApiRequest.css'
import PointSystem from './PointSystem';
import './ChampReponse.css'

class ApiRequest extends React.Component {
     state = {
        country : '', 
        languages: '',
        translations : '',
        reponse: "",
        point : 0 , 

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
            this.setState({translations : this.state.country.translations.fr})
        })
    
    
    }
    
    
    validateReponse  = () =>  {
        
        if(this.state.translations === this.state.reponse){
        this.setState({point : this.state.point + 1});
        this.handleOpenModalWin()
        }else{
            this.handleOpenModalLose()
        
    }
               
        
    }
    handleChange = e => {
        const input = e.target.value
        this.setState({reponse : input})
    }


    componentDidMount(){
        this.getFlag()
    }

    handleOpenModalWin = () => {
        this.setState({ showModalwin: true });
    }
    handleOpenModalLose = () => {
        this.setState({ showModallose: true });
    }

    handleCloseModal = () => {
        this.setState({ showModalwin: false });
        this.setState({ showModallose: false });
    }

    handleCloseAndNewFlag = () =>{
        this.handleCloseModal()
        this.getFlag()
    }
    
    render() {
        
        return( 
            <div className="ApiRequestBlock1">
        <img className="ApiRequestImg" src={this.state.country.flag}/>
        <ChampReponse reponse={this.state.reponse} handleChange ={this.handleChange} />
        <PointSystem point={this.state.point}  validateReponse={this.validateReponse} />
        <button className="ApiRequestBtn" onClick={this.getFlag}></button>
        
       
        <Modal className="modal" isOpen={this.state.showModalwin} contentLabel="Minimal Modal Example">

                    <div className="modalHeader">
                        <h2>WOW!!!</h2>
                    </div>
                    <div className="modalBody">
                        <h3>Congratulations! </h3>
                        <p>This is {this.state.country.name} flag</p>
                        <p> Did you know the capital is {this.state.country.capital}?</p>
                        <p> And did you know there they speak {this.state.languages}?</p> 
                    </div>
                    <button className="modalBtn-closeModal" onClick={this.handleCloseAndNewFlag}>Close</button>
                </Modal>
                <Modal className="modal" isOpen={this.state.showModallose} contentLabel="Minimal Modal Example">

                    <div className="modalHeader">
                    <h2>Wrong answer</h2>
                    </div>
                <   div className="modalBody">
                        <h3>Sorry! </h3>
                        <p>This is {this.state.country.name} flag</p>
                        <p> Did you know the capital is {this.state.country.capital}?</p>
                        <p> And did you know there they speak {this.state.languages}?</p> 
                    </div>
                    <button className="modalBtn-closeModal" onClick={this.handleCloseAndNewFlag}>Close</button>
                </Modal>
        </div>
        )  
    }
}



export default ApiRequest