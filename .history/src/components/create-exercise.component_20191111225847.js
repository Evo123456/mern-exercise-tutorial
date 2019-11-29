import React, { Component } from 'react';

export default class CreateExercise extends Component {

  // STEP 1 in creating a component: Add a constructor
  constructor(props) {
    // In JS you need to always start by calling super() when working with a sub-class
    super(props);

    // all the variables that you want to create goes here
    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }

  }

  onChangeUsername(e) {
    this.setState({
      // target.value = target means textbox .value means the value inside the textbox
      username: e.target.value
    });
  }


  onChangeDescription(e) {
    this.setState({
      // target.value = target means textbox .value means the value inside the textbox
      description: e.target.value
    });
  }


  onChangeDuration(e) {
    this.setState({
      // target.value = target means textbox .value means the value inside the textbox
      duration: e.target.value
    });
  }


  onChangeDate(e) {
    this.setState({
      // target.value = target means textbox .value means the value inside the textbox
      date: Date
    });
  }

  onSubmit(e) {
    // stop the default HTML form submission behaviour
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(exercise);
    // TAKE THE USER BACK TO THE HOME-PAGE
    window.location = '/';
  }

  render() {
    return (
      <div>
        <p>You are on the create exercise Component !</p>
      </div>
    )
  }
}
