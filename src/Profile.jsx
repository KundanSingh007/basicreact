import React, { Component } from "react";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      name: "papercraft",
      email: "hello@world.com",
    };
  }

  updateName() {
    this.setState()({
      name: "bye",
    });
  }

  updateEmail() {
    this.setState({
      email: "bye@bye.com",
    });
  }
  render() {
    return (
      <div>
        <h1>Hello: {this.state.name} </h1>
        <h2>email: {this.state.email} </h2>
        <button onClick={() => this.updateName()}>Update name</button>
        <button onClick={() => this.updateEmail()}>Update email</button>
      </div>
    );
  }
}
