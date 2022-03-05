import style from "./ProfilePage.module.css";
import MyPosts from "./My posts/MyPosts";

const ProfilePage = (props) => {
  return (
    <div className={style.ProfilePage}>
      <div>
        <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_focal-760x428,f_auto,q_auto:best/MSNBC/Components/Video/201609/a_ov_Pepe_160928.jpg" />
      </div>
      <div className={style.item1}>Avatar+description</div>
      <MyPosts
        dispatch={props.dispatch}
        postData={props.postData}
        newPostText={props.newPostText}
      />
    </div>
  );
};

export default ProfilePage;
