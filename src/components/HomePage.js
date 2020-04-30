import React from 'react';
import './HomePage.css'
import Map from '../images/map.png'

class HomePage extends React.Component {
    render() {
        return (
            <div className="Home">
                <header>
                    <h1>Flag Quest</h1>
                    <h2>Welcome to this extraordinary flag knowledge quiz</h2>
                </header>
                <div>
                    <img src={Map} alt="" className="Background" />
                </div>
            </div>
        )
    }
}
























export default HomePage;
