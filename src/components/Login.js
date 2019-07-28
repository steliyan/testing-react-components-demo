import React from "react";

export class Login extends React.Component {
  state = {};

  componentDidMount() {
    setTimeout(() => this.setState({ user: "Petkan" }), 0);
  }

  render() {
    const { user } = this.state;
    return user ? <div>{`Login with ${user}`}</div> : <div>No user</div>;
  }
}
