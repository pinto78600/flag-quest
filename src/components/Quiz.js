import React from 'react';
import Apirequest from './ApiRequest'
import ChampReponse from './ChampReponse';


class Quiz extends React.Component {
  render() {
    return (
      <div>
        <Apirequest />
        <ChampReponse />
      </div>
    )
  }
}

export default Quiz
