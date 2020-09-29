import React from 'react';
import './App.css';
import Nav from './Nav';
import Indonesia from './Indonesia';
import Gobal from './Gobal';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CountryDetail from './CountryDetail';

function App() {

  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
        <Route path="/covidtrackerappp/" exact component={Gobal}/>
        <Route path="/covidtrackerappp/countries" exact component={Indonesia}/>
        <Route path="/covidtrackerappp/countries/:key" component={CountryDetail}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
