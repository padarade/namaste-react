import React, { Component } from "react";
import UserContext from "../utils/UserContext";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
      userInfo: null,
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
    // this.interval = setIntervals(() => {
    //   console.log("Intervalss");
    // }, 1000);
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }
  render() {
    const { name, location } = this.state.userInfo || {};
    const { contact } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h3>Name: {name}</h3>
        <h4>Location: {location}</h4>
        <h5>Contact: {contact}</h5>
        <div>
          <UserContext.Consumer>
            {({ loggedinUser }) => (
              <h1 className="text-xl font-bold">{loggedinUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default UserClass;
