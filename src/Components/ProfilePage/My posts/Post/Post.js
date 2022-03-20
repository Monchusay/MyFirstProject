import style from "./Post.module.css";

 const Post = (props) => {

  let PostHasLiked = () => {
      props.postHasLiked(props.id)
  };

  let PostHasDisliked = () => {
      props.postHasDisliked(props.id)
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
