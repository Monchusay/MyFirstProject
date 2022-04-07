import style from "./ProfilePage.module.css";
import MyPostsContainer from "./My posts/MyPostsContainer";
import React from "react";
import ProfileDataContainer from "./ProfileData/ProfileDataContainer";

const ProfilePage = (props) => {
  return (
    <div>
      {/*<div>
        <ProfileDataContainer />
      </div>*/}
      <div className={style.MyProfileInfo}>
        <div className={style.ProfilePic}>
          <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_focal-760x428,f_auto,q_auto:best/MSNBC/Components/Video/201609/a_ov_Pepe_160928.jpg" />
        </div>
        <div className={style.item1}>Name:</div>
        <div className={style.item2}>Surname:</div>
        <div className={style.item3}>Age:</div>
        <div className={style.item4}>Status:</div>
      </div>
      <div className={style.MyPosts}>
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default ProfilePage;
