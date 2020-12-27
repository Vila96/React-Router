import React, { Component } from "react";
import './App.css';
import Nav from "./Nav/Nav"
import Page1 from "./Page1/Page1"
import Page2 from "./Page2/Page2"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


class App extends Component {
  constructor (props) {
      super(props);

      this.state = {
          test: "I am a test",
          currentView: 0
      };
  }

  //1st Generation function before react-router-dom (this function is only an example)
  changeView() {
    switch (this.state.currentView) {
      case 0: 
        return <Page1 test = {this.state.test}/>
      
      case 1: 
        return <Page2 test = {this.state.test}/>
      default:
    }
  }


  render() {
    return (
    <div className="App">
      <header className="header">
      <Router>

        <Nav/>
        {/*this.changeView()*/}

        <Switch>

          <Route path="/view1">
              <Page1 />
          </Route>
          <Route path="/view2">
              <Page2 />
          </Route>
          <Route path="/view3">
              
          </Route>
          <Route path="/view4">
              
          </Route>
        </Switch>

      </Router>

      </header>
    </div>
    )
  };
  
}

export default App;
