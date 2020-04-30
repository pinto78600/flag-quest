import React from 'react'
import logo from './img/logo-white2.png';
import logoFb from './img/logo-fb.svg';
import logoTwitter from './img/logo_twitter.svg';
import logoYoutube from './img/logo_yt.svg';



import './Footer.css'


class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="flex-footer">


                    <div className="flex-list">
                        <ul>
                            <li> <a href="R" >Contact Us</a></li>
                            <li><a href="R" ></a></li>
                        </ul>
                        <ul>
                            <li><a href="R" >Flag Quest</a></li>
                            <li><a href="R" ></a></li>
                        </ul>
                    </div>

                    <hr />
                    <img className="logo-world" src={logo} alt="Logo pokemon" />
                    <hr />

                    <div className="flex-logoReseau">
                        <a href="https://www.facebook.fr" target="_blank" rel="noopener noreferrer"><img className="logo-fb" src={logoFb} alt="Logo facebook" /></a>


                        <a href="https://twitter.com/explore" target="_blank" rel="noopener noreferrer"><img className="logo-twitter" src={logoTwitter} alt="Logo twitter" /></a>


                        <a href="https://www.youtube.fr" target="_blank" rel="noopener noreferrer"> <img className="logo-youtube" src={logoYoutube} alt="Logo youtube" /> </a>
                    </div>


                </div>
            </footer>
        )
    }
}

export default Footer;