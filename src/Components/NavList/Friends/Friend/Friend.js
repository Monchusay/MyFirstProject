import style from "./Friend.module.css";

const Friend = (props) => {
  return (
    <div className={style.Friend}>
      <div className={style.image}>
        <img src={props.image} />
      </div>
      <div className={style.friendName}>{props.friendName}</div>
    </div>
  );
};

export default Friend;
