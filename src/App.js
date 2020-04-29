import React from 'react';
import {browserRouter as Router ,Route , Switch} from 'react-router-dom' 
 

class App extends React.Component{
render(){
  return(
    <Router>
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
