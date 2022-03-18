import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import PostContainer from "./Post/PostContainer";

const MyPosts = (props) => {
  let postElements = props.postData.map((post) => (
    <PostContainer
        key={post.id}
      dispatch={props.dispatch}
      {...post}
    />
  ));

  let NewPostElement = React.createRef();

  let OnAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = NewPostElement.current.value;
    props.updateNewPostText(text);
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
