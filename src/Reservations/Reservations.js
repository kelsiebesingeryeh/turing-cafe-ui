import React from 'react'

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

    return (
        <h1>Please work!</h1>
    )
}

export default Reservations