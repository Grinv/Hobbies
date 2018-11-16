import React, { Component } from 'react';
import './complainDialog.css'
import remove from './img/close.png';

export default class ComplainDialog extends Component {
  render() {
    return (
      <div className="complainDialogBackground">
        <div className="complainDialog">
          Пожаловались на {this.props.complainedHobby}
          <button className="closeComplainDialog" onClick={() => this.props.closeComplainDialog()}><img src={remove} /></button>
        </div>
      </div>
    );
  }
}
