import React, { Component } from "react";
import { Link } from "react-router-dom";
import Calendar from "./Calendar";

class Home extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.events)
  }

  render() {

    this.first_object = (
    <div key={this.props.events[0].database_id}>
      <Link to={`/event/${this.props.events[0].database_id}`} style={{ textDecoration: "black", color: "black" }} >
        <h2>{this.props.events[0].title}</h2>
        <h3>{this.props.events[0].date}</h3>
      </Link>
    </div>);

    return (
      <div>
        <div className="next_event">
          <h1>Next event:</h1>
          {this.first_object}
        </div>
        <Calendar events={this.props.events} />
      </div>
    );
  }
}

export default Home;
