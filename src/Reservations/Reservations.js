import React from 'react'
import Card from '../Card/Card'
import './Reservations.css'

const Reservations = ({ reservations, cancelReservation }) => {
  const reservationsToDisplay = reservations.map((resy) => {
    return (
      <Card
        id={resy.id}
        key={resy.id}
        name={resy.name}
        date={resy.date}
        number={resy.number}
        time={resy.time}
        cancelReservation={cancelReservation}
      />
    )
  })

  return <div className="resyContainer">{reservationsToDisplay}</div>;
}

export default Reservations