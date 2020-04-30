import React from 'react';
import './HomePage.css'
import Map from '../images/map.png'
import StartButton from "./StartButton.js"

class HomePage extends React.Component {
    render() {
        return (
            <div className="Home">
                <header>
                    <h1>Flag Quest</h1>
                    <h2>Welcome to this extraordinary flag knowledge quiz !</h2>
                </header>
                <div>
                    <img src={Map} alt="World map" className="Background" />
                </div>
                <div className="StartButton">
                    <StartButton />
                </div>
            </div>
        )
    }
}
























export default HomePage;
