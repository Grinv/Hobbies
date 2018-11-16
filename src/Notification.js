import React, { Component } from 'react';
import ok from './img/ok.png';
import './notification.css';
import fader from './img/fader.png';

export default class Notification extends Component {
  getNotification(notification, key) {
    return (
      <li key={key} className="notificationListItem">
        <div className="notificatioHobby">{notification}</div>
        <div className="notificationMessage">
          <img className="notificationMessageImg" src={ok} />
          <span>добавлено в ваши увлечения</span>
        </div>
        <div className="endingSpace"><img src={fader} /></div>
      </li>
    );
  }

  render() {
    if (!this.props.notification.length) return '';
    return (
      <ul className="notificationList" >{this.props.notification.map((notification, key) => this.getNotification(notification, key))}</ul>
    );
  }
}
