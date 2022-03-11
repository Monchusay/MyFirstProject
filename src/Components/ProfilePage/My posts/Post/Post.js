import style from "./Post.module.css";
import {
  postHasDisLikedActionCreator,
  postHasLikedActionCreator,
} from "../../../../Redux/ProfilePageReducer";

const Post = (props) => {
  const PostHasLiked = () => {
    props.dispatch(postHasLikedActionCreator(props.id));
  };

  const PostHasDisliked = () => {
    props.dispatch(postHasDisLikedActionCreator(props.id));
  };

  return (
    <div className={style.item}>
      <img src={props.image} />
      {props.message}
      <div>Likes: {props.likesCount}</div>
      <div> Dislikes: - {props.DislikesCount}</div>
      <div>
        <button onClick={PostHasLiked} className={style.button1}>
          like
        </button>
        <button onClick={PostHasDisliked} className={style.button2}>
          dislike
        </button>
      </div>
    </div>
  );
};

export default Post;
