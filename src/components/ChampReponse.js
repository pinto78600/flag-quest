import React from 'react';
import './ChampReponse.css'


const ChampReponse = props => {
    return (

            <div className="Reponse">
                <p className="champReponseP">WHICH COUNTRY FLAG IS THIS ?</p>
                <input
                    className="ChampReponse"
                    type="text"
                    name="reponse"
                    placeholder=""
                    onChange={props.handleChange}
                />
            </div>
        )
    }


export default ChampReponse;