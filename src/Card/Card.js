import React from 'react'
import './Card.css'

const Card = ({ id, name, date, number, time, cancelReservation}) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
      <button className="cancelButton button" onClick={() => cancelReservation(id)}>
        Cancel
      </button>
    </div>
  );
};

export default Card