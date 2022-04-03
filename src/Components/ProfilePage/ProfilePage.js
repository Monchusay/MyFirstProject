import style from "./ProfilePage.module.css";
import MyPostsContainer from "./My posts/MyPostsContainer";
import React, { useEffect } from "react";
import axios from "axios";
import Preloader from "../Common/Preloader";

const ProfilePage = (props) => {

  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/Monchusay/MyFirstProject/profileInfoData"
      )
      .then((response) => {
        props.setUserProfile(response.data);
      });
  }, []);

  if (props.profileInfoData.length == 0 ) {
    return <Preloader />;
  }

  return (
    <div>
        <div>
            <img src={props.profileInfoData[0].photo}/>
        </div>
      <div className={style.ProfilePage}>
        <MyPostsContainer
        />
      </div>
    </div>
  );
};

export default ProfilePage;
