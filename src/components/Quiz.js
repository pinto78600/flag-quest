import React from 'react';
import Apirequest from './ApiRequest'
import ChampReponse from './ChampReponse';
import './Quiz.css'


class Quiz extends React.Component {
  render() {
    return (
      <div className="Quiz">
        <Apirequest />
        <ChampReponse />
      </div>
    )
  }
}

export default Quiz
