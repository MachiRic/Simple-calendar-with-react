import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import Header from "./Header";
import Home from "./Home";
import './App.css';
import Fetcher from "./fetchfuncs"
import EventDetail from "./EventDetail"
import AES from 'crypto-js/aes'
import enc from 'crypto-js/enc-utf8'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "LOADING",
      events: ""
    };
    this.fetcher = new Fetcher();
  }
  componentDidMount() {
    // when data is retrieved we update the state
    // this will cause the component to re-render
    this.fetcher.getAllEvents()
      .then(events => {
        console.log(AES.decrypt(events, "teamengine-key").toString(enc))
        events = this.fetcher.processResponse(events).events;
        this.setState({
          status: "LOADED",
          events: events
        });
      })
      .catch(() => {
        this.setState({
          status: "ERROR"
        });
      });

  }

  render() {
    let events = null;
    switch (this.state.status) {
      case "LOADING":
        events = <img src={logo} className="App-logo" alt="logo" />
        break;
      case "LOADED":
       events =( <Router>
          <div className="App">
            <header className="App-header">
              <Header />
            </header>
            <Route exact path="/" render={() => <Home events={this.state.events}/>} />
            <Route path="/event/:id" render={() => <EventDetail events={this.state.events}/>}/>
          </div>
        </Router>)
        break;
      case "ERROR":
        events = <b>Failed to load data, please try again</b>;
        break;
    }
    return (
      <div className="events">
        {events}
      </div>
    );
  }
}

export default App;
