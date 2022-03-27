import Friend from "./Friend/Friend";
import style from "./Friends.module.css";
import React from "react";
import axios from "axios";

class FriendsClass extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get("https://my-json-server.typicode.com/Monchusay/MyFirstProject/shortcutData").then(response => {
            this.props.setFriends(response.data)
        })
    }

  FriendsShortcut = this.props.shortcutData.map((friend) => (
    <Friend
      key={friend.friendName}
      image={friend.image}
      friendName={friend.friendName}
    />
  ));

  render() {
    return (
      <div className={style.FriendsShortcut}>
        <div className={style.Friends}>Friends</div>
        <div className={style.chelIb}>{this.FriendsShortcut}</div>
      </div>
    );
  }
}

export default FriendsClass;
