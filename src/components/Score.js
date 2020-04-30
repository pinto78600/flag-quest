import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScoreFinal from './ScoreFinal'
import './Score.css'
import vomit from './vomit.svg'
import emotion from './emotion.svg'
import emoji from './emoji.svg'

class Score extends React.Component {
    state={
        point : this.props.location.score,
    }
   
    render() {
        const point = this.props.location.score
        console.log(this.props.point)
        return (
                <div>
                    <Header/>
                               
            <div className="scoreDiv">
                <ScoreFinal point={point} />
                {this.state.point < 3 ? (
                <img className="image" src={vomit} /> )
                 : this.state.point <=4 && this.state.point>=3 ? ( <img className="image" src={emoji} /> ) : this.state.point >=5 ? ( <img className="image" src={emotion} /> ) : null } 
                <Footer/>
            </div>
            </div> 
        )
    }
}

export default Score;
