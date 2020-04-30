import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Modal from 'react-modal';
import ChampReponse from './ChampReponse';


import './ApiRequest.css'
import PointSystem from './PointSystem';
import './ChampReponse.css'

class ApiRequest extends React.Component {
    state = {
        country: '',
        languages: '',
        translations: '',
        reponse: "",
        point: 0,

    }

    getFlag = () => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(res => {
                const countries = res.data;
                this.setState({ country: res.data })
                let flag = countries[Math.floor(Math.random() * countries.length)]
                this.setState({ country: flag })
                this.setState({ languages: this.state.country.languages[0].name })
                this.setState({ translations: this.state.country.translations.fr })
            })
    }

    componentDidMount() {
        this.getFlag()
    }

    validateReponse = () => {
        if (this.state.translations === this.state.reponse) {
            this.setState({ point: this.state.point + 1 });
            this.handleOpenModalWin()
        } else {
            this.handleOpenModalLose()
        }

    }
    handleChange = e => {
        const input = e.target.value
        this.setState({ reponse: input })
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

    closeAndNewFlag = () => {
        this.handleCloseModal()
        this.getFlag()
    }

    render() {
        console.log(this.state.point)
        return (
            <div className="ApiRequestBlock1">
                <img className="ApiRequestImg" src={this.state.country.flag} />
                <button className="ApiRequestBtn" onClick={this.getFlag}></button>
                <ChampReponse reponse={this.state.reponse} handleChange={this.handleChange} />
                <PointSystem point={this.state.point} validateReponse={this.validateReponse} />

                <Modal className="modal" isOpen={this.state.showModalwin} contentLabel="Minimal Modal Example">
                    <div className="modalHeader">
                        <h2 className="modalH2">WOW!!!</h2>
                    </div>
                    <div className="modalBody">
                        <h3 className="modalH3">Congratulations! </h3>
                        <p className="modalP">This is {this.state.country.name} flag</p>
                        <p className="modalP"> Did you know the capital is {this.state.country.capital}?</p>
                        <p className="modalP"> And did you know there they speak {this.state.languages}?</p>
                    </div>
                    <button className="modalBtnB" onClick={this.closeAndNewFlag}>Close</button>
                </Modal>
                <Modal className="modal" isOpen={this.state.showModallose} contentLabel="Minimal Modal Example">
                    <div className="modalHeader">
                        <h2 className="modalH2">Wrong answer</h2>
                    </div>
                    <div className="modalBody">
                        <h3 className="modalH3">Sorry! </h3>
                        <p className="modalP" >This is {this.state.country.name} flag</p>
                        <p className="modalP"> Did you know the capital is {this.state.country.capital}?</p>
                        <p className="modalP"> And did you know there they speak {this.state.languages}?</p>
                    </div>
                    <div className="modalBtns">
                        <NavLink to={{ pathname: '/score', score: this.state.point }}>
                            <button className="modalBtn">Results</button>
                        </NavLink>
                        <button className="modalBtn" onClick={this.closeAndNewFlag}>Close</button>
                    </div>
                </Modal>

            </div>
        )
    }
}



export default ApiRequest