import React, { Component, Fragment } from 'react';
import HobbiesContainer from './HobbiesContainer';
import List from './List';
import HobbyInput from './HobbyInput';

const LIMIT = 2;

export default class MyHobbies extends Component {
  get content() {
    return (
      <Fragment>
        <HobbyInput list={this.props.list} addHobby={this.props.addHobby} />
        <List list={this.props.list} limit={LIMIT} removeHobby={this.props.removeHobby} type="MyHobbies"/>
      </Fragment>
    )
  }

  render() {
    return <HobbiesContainer title="О себе" subTitle="Хобби" content={this.content} />;
  }
}
