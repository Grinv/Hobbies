import React, { PureComponent } from 'react';
import './hobbiesContainer.css';

export default class FriendHobbies extends PureComponent {
  render() {
    return (
      <div className="container">
          <h1 className="title">{this.props.title}</h1>
          <div className="subtitle">
            <h2 >{this.props.subTitle}</h2>
          </div>
          <div className="content">{this.props.content}</div>
      </div>
    );
  }
}
