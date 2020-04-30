import React from 'react';
import Footer from './Footer';
import ScoreFinal from './ScoreFinal'
import './Score.css'
import vomit from './vomit.svg'
import emotion from './emotion.svg'
import emoji from './emoji.svg'

class Score extends React.Component {
    state={
        point : this.props.location.score,
        iamge: ''
    }

    showImage=()=>{
        if (this.state.point >5) {
            this.setState({image:{emotion}})
        } else if (this.state.point >= 4 && this.state.point <= 5){
            this.setState({image:{emoji}})
        } else {
            this.setState({image:{vomit}})
        } 
    }
   
    render() {
        const point = this.props.location.score
        console.log(this.props.point)
        return (
            <div>
                <img src={this.state.showImage}/>
                <ScoreFinal point={point} />
                <Footer/>
            </div>
        )
    }
}

export default Score;
