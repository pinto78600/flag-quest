import React from 'react';
import ScoreFinal from './ScoreFinal'
import Footer from './Footer';

class Score extends React.Component {
    state={
        point : this.props.location.score
    }
   
    render() {
        const point = this.props.location.score
        console.log(this.props.point)
        return (
            <div>
                <ScoreFinal point={point} />
                <Footer/>
            </div>
        )
    }
}

export default Score;
