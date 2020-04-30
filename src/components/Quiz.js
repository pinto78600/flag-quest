import React from 'react';
import Apirequest from './ApiRequest'
import Footer from './Footer';
import Header from './Header';
class Quiz extends React.Component {
  render() {
    return (
        <div className="Quiz">
          <Header/>
          <Apirequest />
          <Footer/>
        </div>
      )
  }
}

export default Quiz
