import {connect} from "react-redux";
import Friends from "./Friends";
import {setFriendsActionCreator} from "../../../Redux/FriendsPageReducer";
import FriendsClass from "./FriendsClass";

/*const Friends = (props) => {
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
};*/

let mapStateToProps = (state) => {
    return {
        shortcutData: state.friendsPage.shortcutData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setFriends: (shortcutData) => {
            dispatch(setFriendsActionCreator(shortcutData))
        }
    }
}

const FriendsContainer = connect (mapStateToProps, mapDispatchToProps)(FriendsClass);


export default FriendsContainer;
