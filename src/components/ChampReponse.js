import React from 'react';
import './ChampReponse.css'


class ChampReponse extends React.Component {


    render() {
        return (

            <div className="Reponse">
                <p>WHICH COUNTRY FLAG IS THIS ?</p>
                <input
                    className="ChampReponse"
                    type="text"
                    value=""
                    placeholder=""
                    onChange=""
                />
            </div>
        )
    }
}

export default ChampReponse;