import React from 'react'
import Card from '../Card/Card'

const Reservations = ({ reservations }) => {
    const reservationsToDisplay = reservations.map(resy => {
        return (
        <Card 
         id={resy.id}
         key={resy.id}
         name={resy.name}
         date={resy.date}
         number={resy.number}
         time={resy.time}
        />
        )
    })

    return <h3>{reservationsToDisplay}</h3>;
}

export default Reservations