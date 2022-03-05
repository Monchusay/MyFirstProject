import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.item}>
      <img src={props.image} />
      {props.message}
      {props.likesCount}
      <div>
        <button className={style.button1}>like</button>
        <button className={style.button2}>dislike</button>
      </div>
    </div>
  );
};

export default Post;
