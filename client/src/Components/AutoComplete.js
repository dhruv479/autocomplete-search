import React, { Component } from "react";
import { getUserSearchService } from "../services/user.services";
import UserCard from "./UserCard";

export default class AutoComplete extends Component {
  state = {
    text: "",
    users: [],
    queryUsers: [],
  };
  async componentDidMount() {
    const response = await getUserSearchService({ text: "" });
    this.setState({ users: response.data });
    console.log(response.data);
  }
  render() {
    return (
      <div>
        {this.state.users.map((user, index) => (
          <UserCard user={user} key={index} />
        ))}
      </div>
    );
  }
}
