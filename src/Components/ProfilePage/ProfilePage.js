import style from "./ProfilePage.module.css";
import MyPostsContainer from "./My posts/MyPostsContainer";
import {useEffect} from "react";

const ProfilePageContainer = (props) => {

    useEffect(() => {

    })

  return (
    <div className={style.ProfilePage}>
      <MyPostsContainer {...props} />
    </div>
  );
};

export default ProfilePageContainer;
