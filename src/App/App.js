import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations'
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/reservations")
    .then(response => response.json())
    .then(reservations => this.setState({reservations: reservations }))
  }

  addReservation = (newReservation) => {
      this.setState({
        reservations: [...this.state.reservations, newReservation]
      })
  }


  render() {
    return (
      <div className="App">
        <h1 className="appTitle">Turing Cafe Reservations</h1>
        <div className="resyForm">
          <Form 
          addReservation={this.addReservation} 
          />
        </div>
        <div className="resyContainer">
          <Reservations reservations={this.state.reservations} />
        </div>
      </div>
    );
  }
}

export default App;
