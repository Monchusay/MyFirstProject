import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/State";

const MyPosts = (props) => {
  let postElements = props.postData.map((post) => (
    <Post
      id={post.id}
      message={post.message}
      likesCount={post.likesCount}
      image={post.image}
    />
  ));

  let NewPostElement = React.createRef();

  let OnAddPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = NewPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={style.item1}>
      My Posts
      <div className={style.item1}>
        <textarea
          onChange={onPostChange}
          className={style.textareaNewPost}
          ref={NewPostElement}
          value={props.newPostText}
        />
        <div>
          <button onClick={OnAddPost}> Add post </button>
        </div>
      </div>
      <div className={style.item1}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
