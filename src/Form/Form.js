import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            date: '',
            time: '',
            number: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newReservation = {
            id: Date.now(),
            ...this.state
        }
        this.props.addReservation(newReservation)
        this.clearInputs()
        this.submitPostRequest()
    }

    clearInputs = () => {
        this.setState({
          name: "",
          date: "",
          time: "",
          number: "",
        })
    }

    submitPostRequest = () => {
        fetch("http://localhost:3001/api/v1/reservations", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: Date.now(),
            name: this.state.name,
            date: this.state.date,
            time: this.state.time,
            number: parseInt(this.state.number),
          }),
        })
        .then(response => response.json())
        .then(reservations => {
            this.setState({
                id: reservations.id,
                name: reservations.name,
                date: reservations.date,
                time: reservations.time,
                number: reservations.number
            })
        })
    }

    render() {
        return (
          <form>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="date"
              placeholder="Date (mm/dd)"
              value={this.state.date}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="time"
              placeholder="Time"
              value={this.state.time}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="number"
              placeholder="Number of guests"
              value={this.state.number}
              onChange={this.handleChange}
            />
          <button className="reservationButton button"onClick={this.handleSubmit}>Make Reservation</button>
          </form>
        )
    }
}

export default Form