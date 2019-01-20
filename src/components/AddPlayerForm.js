/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class AddPlayerForm extends Component {
  state = {
    value: '',
  };

  handleValueChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    const { addPlayer } = this.props;
    e.preventDefault();
    addPlayer(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleValueChange}
          placeholder="Enter a player's name"
        />
        <input type="submit" value="Add Player" />
      </form>
    );
  }
}
