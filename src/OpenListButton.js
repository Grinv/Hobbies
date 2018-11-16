import React, { PureComponent } from 'react';
import './openListButton.css';

export default class OpenListButton extends PureComponent {
  render() {
    if (this.props.listLength <= this.props.limit) return '';
    return <button
      className="openListButton"
      onClick={this.props.onClick}>
        еще {(this.props.listLength - this.props.limit) || ''} интереса
      </button>
  }
}
