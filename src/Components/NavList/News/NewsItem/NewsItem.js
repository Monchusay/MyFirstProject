import style from "./NewsItem.module.css";

const NewsItem = (props) => {

  let newsItemHasLiked = () => {
    props.newsItemHasLiked(props.id);
  };

  return (
    <div className={style.NewsItem}>
      <div className={style.senderPic}>
        <img src={props.senderPic} />
      </div>
      <div className={style.senderName}>{props.senderName}</div>
      <div className={style.sendingPic}>
        <img src={props.sendingPic} />
      </div>
      <div className={style.sendingText}>{props.sendingText}</div>
      <div className={style.Likes}>Likes: {props.likesCount}</div>
      <div className={style.Like}>
        <div>
          <button onClick={newsItemHasLiked}>Like</button>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
