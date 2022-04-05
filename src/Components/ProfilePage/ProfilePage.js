import style from "./ProfilePage.module.css";
import MyPostsContainer from "./My posts/MyPostsContainer";
import React from "react";
import ProfileDataContainer from "./ProfileData/ProfileDataContainer";

const ProfilePage = (props) => {


  return (
    <div>
        <div>
            <ProfileDataContainer/>
        </div>
      <div className={style.ProfilePage}>
        <MyPostsContainer/>
      </div>
    </div>
  );
};

export default ProfilePage;
