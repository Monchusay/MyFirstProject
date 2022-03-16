import style from "./ProfilePage.module.css";
import MyPostsContainer from "./My posts/MyPostsContainer";

const ProfilePage = (props) => {
  return (
    <div className={style.ProfilePage}>
      <div>
        <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_focal-760x428,f_auto,q_auto:best/MSNBC/Components/Video/201609/a_ov_Pepe_160928.jpg" />
      </div>
      <div className={style.item1}>Avatar+description</div>
      <MyPostsContainer
          store={props.store}
      />
    </div>
  );
};

export default ProfilePage;
