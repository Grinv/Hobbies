import React, { Component } from 'react';
import HobbiesContainer from './HobbiesContainer';
import List from './List';

const LIMIT = 2;

export default class FriendHobbies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  get content() {
    return <List list={this.props.list} limit={LIMIT} addFriendHobby={this.props.addFriendHobby} complain={this.props.complain} type="FriendHobbies" />;
  }

  render() {
    return <HobbiesContainer title="Интересы друга" subTitle="Хобби" content={this.content} />;
  }
}
