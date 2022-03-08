import Friend from "./Friend/Friend";
import style from "./Friends.module.css";

const Friends = (props) => {
  let FriendsShortcut = props.shortcutData.map((friend) => (
    <Friend key={friend.friendName}
        image={friend.image} friendName={friend.friendName} />
  ));

  return (
    <div className={style.FriendsShortcut}>
      <div className={style.Friends}>Friends</div>
      <div className={style.chelIb}>{FriendsShortcut}</div>
    </div>
  );
};

export default Friends;
