import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations'
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
      error: ''
    }
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/reservations")
    .then(response => response.json())
    .then(reservations => this.setState({reservations: reservations }))
    .catch(error => this.setState({error: 'Oops, something went wrong!'}))
  }

  addReservation = (newReservation) => {
      this.setState({
        reservations: [...this.state.reservations, newReservation]
      })
  }

  cancelReservation = (id) => {
    const filteredReservations = this.state.reservations.filter(resy => resy.id  !== id)
    
    this.setState({
      reservations: filteredReservations
    })
    this.deletePostRequest(id)
  }

  deletePostRequest = (id) => {
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.error && 
        <h2>{this.state.error}</h2>
        }
        <h1 className="appTitle">Turing Cafe Reservations</h1>
        <div className="resyForm">
          <Form addReservation={this.addReservation} />
        </div>
        <Reservations
          reservations={this.state.reservations}
          cancelReservation={this.cancelReservation}
        />
      </div>
    )
  }
}

export default App;
