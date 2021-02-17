import React from 'react'
import './Card.css'

const Card = ({ id, name, date, number, time, cancelReservation}) => {
  return (
    <div className="card">
      <h3 className='reservationName'>{name}</h3>
      <p className='reservationDate'>{date}</p>
      <p className='reservationTime'>{time}</p>
      <p className='reservationNumber'>Number of guests: {number}</p>
      <button className="cancelButton button" onClick={() => cancelReservation(id)}>
        Cancel
      </button>
    </div>
  )
}

export default Card