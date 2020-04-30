import React from 'react';
import {BrowserRouter as Router ,Route , Switch, Link} from 'react-router-dom'
import HomePage from './components/HomePage'
import Quiz from './components/Quiz' 
import Score from './components/Score'

 

class App extends React.Component{
render(){
  return(
    <Router>
      <Link to="/quiz"> Quiz</Link>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/quiz" component={Quiz}/>
        <Route path='/score' component={Score}/>
      </Switch>
    </Router>
  )
}
}

export default App;
