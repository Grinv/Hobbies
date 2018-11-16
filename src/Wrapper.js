import React, { Component, Fragment } from 'react';
import 'normalize.css'
import MyHobbies from './MyHobbies';
import FriendHobbies from './FriendHobbies';
import ComplainDialog from './ComplainDialog';
import Notification from './Notification';

export default class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isComplainDialogOpened: false,
      complainedHobby: null,
      myHobbiesList: [
        'Хоккей',
        'Высокоточная вёрстка под старые версии Microsoft Internet Explorer, начиная с версии 5.01',
        'Моё хобби 1',
        'Моё хобби 2',
        'Моё хобби 3',
        'Моё хобби 4'
      ],
      friendHobbiesList: [
        'Баскетбол',
        'Нарезка Photoshop/Fireworks макетов на скорость, в экстримельных условиях, на природе',
        'Хобби друга 1',
        'Хобби друга 2'
      ],
      notification: []
    };

    this.addHobby = this.addHobby.bind(this);
    this.addFriendHobby = this.addFriendHobby.bind(this);
    this.removeHobby = this.removeHobby.bind(this);
    this.complain = this.complain.bind(this);
    this.closeComplainDialog = this.closeComplainDialog.bind(this);
  }

  addHobby(hobby) {
    const myHobbiesList = this.state.myHobbiesList;
    myHobbiesList.push(hobby);
    this.setState({ myHobbiesList });
  }

  addFriendHobby(hobby) {
    if (!this.state.myHobbiesList.includes(hobby)) {
      this.addHobby(hobby);
      const notification = this.state.notification;
      notification.push(hobby);
      this.setState({ notification });
    }
  }

  removeHobby(hobby) {
    const index = this.state.myHobbiesList.indexOf(hobby);
    if (index !== -1) {
      const myHobbiesList = this.state.myHobbiesList;
      myHobbiesList.splice(index, 1);
      this.setState({ myHobbiesList });
    }
  }

  complain(hobby) {
    this.setState({isComplainDialogOpened: true, complainedHobby: hobby });
  }

  closeComplainDialog() {
    this.setState({isComplainDialogOpened: false, complainedHobby: null });
  }

  render() {
    return (
      <Fragment>
        <div>
          <MyHobbies list={this.state.myHobbiesList} addHobby={this.addHobby} removeHobby={this.removeHobby}/>
          <FriendHobbies list={this.state.friendHobbiesList} addFriendHobby={this.addFriendHobby} complain={this.complain} />
          <Notification notification={this.state.notification}/>
        </div>
        {this.state.isComplainDialogOpened && <ComplainDialog complainedHobby={this.state.complainedHobby} closeComplainDialog={this.closeComplainDialog} />}
      </Fragment>
    );
  }
}
