import React, { Component, Fragment } from 'react';
import OpenListButton from './OpenListButton';
import './list.css';
import remove from './img/close.png';
import add from './img/add.gif';
import warn from './img/warn.png';
import fader from './img/fader.png';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isListOpened: false
    };
  }

  getElement(element, key) {
    if (this.props.type === "MyHobbies") {
      return <li className="listItem myHobbies" key={key}>
        <button className="removeHobby" onClick={() => this.props.removeHobby(element)}><img src={remove} /></button>
        <span className="hobbyText">
          {element}
          <span className="endingSpace"><img src={fader} /></span>
        </span>
        
      </li>;
    } else if (this.props.type === "FriendHobbies") {
      return <li className="listItem friendHobbies" key={key}>
        <button className="addFriendHobby" onClick={() => this.props.addFriendHobby(element)}><img src={add} /></button>
        <span className="hobbyText">
          {element}
          <span className="endingSpace"><img src={fader} /></span>
        </span>
        <button className="complainButton" onClick={() => this.props.complain(element)}><img src={warn} /> пожаловаться</button>
      </li>;
    }
    return '';
  }

  get filteredList() {
    return this.props.list.filter((element, key) => {
      if (!this.state.isListOpened && key >= this.props.limit) return false;
      return true;
    });
  }

  render() {
    if (!this.props.list.length) return '';
    return (
      <Fragment>
        <ul className="list">{this.filteredList.map((element, key) => this.getElement(element, key))}</ul>
        {!this.state.isListOpened &&
          <OpenListButton
            onClick={() => this.setState({ isListOpened: true })}
            listLength={this.props.list.length}
            limit={this.props.limit}
          />
        }
      </Fragment>
    );
  }
}
