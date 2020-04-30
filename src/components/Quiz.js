import React from 'react';
import Apirequest from './ApiRequest'
import Footer from './Footer';
import Header from './Header';
class Quiz extends React.Component {
  render() {
    return(
    <div>
      <Header />
      <div className="quiz">
      <Apirequest />
      </div>
      <Footer />
    </div>
    )
  }
}

  export default Quiz
