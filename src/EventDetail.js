import React, { Component } from "react";

class EventDetail extends Component {
    constructor(props) {
        super(props);
        this.current_event_id = window.location.href.split("/")[4]
    }

    Attendants(event) {
        let list = []
        event.attendents.forEach(attendent => {
            console.log(attendent);
            list.push(attendent+" ")
        })
        return list
    }

    render() {
        // depending on the state we either generate
        // useful message to the user or show the list
        let current_event = this.props.events.map(event => {
            if (event.database_id == this.current_event_id) {
                let details = (<div key={event.database_id}>
                    <h1>{event.title}</h1>
                    <h3>{event.date}</h3>
                    <p>{event.description}</p>
                    <p>Attendents: {this.Attendants(event)}</p>
                </div>);
                return details
    }
})
return (
    <div className="events">
        {current_event}
    </div>
);
    }
}

export default EventDetail;
