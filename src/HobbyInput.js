import React, { Component } from 'react';
import './hobbyInput.css';

export default class HobbyInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this._handleChange = this._handleChange.bind(this);
    this._handleKeyPress = this._handleKeyPress.bind(this);
  }

  _handleChange(event) {
    this.setState({value: event.target.value});
  }

  _handleKeyPress(event) {
    if (event.key === 'Enter' && this.state.value !== '') {
      if (!this.props.list.includes(this.state.value)) this.props.addHobby(this.state.value);
      this.setState({ value: '' });
    }
  }

  render() {
    return <input
      className='hobbyInput'
      placeholder="Введите текст"
      type="text"
      value={this.state.value}
      onChange={this._handleChange}
      onKeyPress={this._handleKeyPress}
    />;
  }
}
