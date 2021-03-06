import React from 'react';
import Ticket from './Ticket';

const masterTicketList = [
  {
    names: "Thato and Haley",
    location: "3A",
    issue: "Firebase will not save record!"
  },
  {
    names: "Sleater and Kinney",
    location: "4B",
    issue: "Prop Types are throwing an error."
  },
  {
    names: "Imnai and Jacob",
    location: '9f',
    issue: "shild component isn\'t rendering."
  }
];


function TicketList() {
  return (
    <React.Fragment>
     <hr />
     {masterTicketList.map((ticket, index) =>
      <Ticket names={ticket.names}
        location={ticket.location}
        issue={ticket.issue}
        key={index}/>
     )}
    </React.Fragment>
  );
}

export default TicketList;