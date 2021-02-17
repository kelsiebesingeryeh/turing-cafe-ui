import React, { Component } from 'react'

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
          <button>Make Reservation</button>
          </form>
        );
    }
}

export default Form