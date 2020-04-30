import React from 'react';
import Apirequest from './ApiRequest'
import Footer from './Footer';

import './Quiz.css'


class Quiz extends React.Component {
  render() {
    return (
      <div className="Quiz">
        <Apirequest />
        <Footer/>
      </div>
    )
  }
}

export default Quiz
