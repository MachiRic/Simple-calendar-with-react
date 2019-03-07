import React, { Component } from "react";
import { Link } from "react-router-dom";

class Calendar extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    createTable(monthNr) {
        let content =[]
        let firstDay = new Date(2019, monthNr);
        while (firstDay.getMonth() == monthNr) {
             content.push(
            <div key={firstDay.getDate()} className="calendar-item">
                <h5>{firstDay.getDate()}</h5>
                {
                    this.props.events.map(event => {
                       let d = new Date(Date.parse(event.date))
                        if (d.toDateString() == firstDay.toDateString()) {
                                return(<div key={event.database_id}>
                                <Link to={`/event/${event.database_id}`} style={{ textDecoration: "black", color: "black" }} >
                                    <h2>{event.title}</h2>
                                </Link>
                                </div>)
                        }
                    })}
            </div>)
            firstDay.setDate(firstDay.getDate() + 1)
        }
        return content
    }


    render() {
        // depending on the state we either generate
        // useful message to the user or show the list
        return (
            <div className="events">
                <div className="calendar-container">
                    {this.createTable(1)}
                </div>
            </div>
        );
    }
}

export default Calendar;
