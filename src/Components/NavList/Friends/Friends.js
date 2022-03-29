import Friend from "./Friend/Friend";
import style from "./Friends.module.css";
import React from "react";
import axios from "axios";

const Friends = (props) => {

    if (props.shortcutData.length===0) {
        axios.get("https://my-json-server.typicode.com/Monchusay/MyFirstProject/shortcutData").then(response => {
            props.setFriends(response.data)
        })
    }

  let FriendsShortcut = props.shortcutData.map((friend) => (
    <Friend
      key={friend.friendName}
      image={friend.image}
      friendName={friend.friendName}
    />
  ));

    return (
      <div className={style.FriendsShortcut}>
        <div className={style.Friends}>Friends</div>
        <div className={style.chelIb}>{FriendsShortcut}</div>
      </div>
    );
}

export default Friends;
