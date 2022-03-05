import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
  let postElements = props.postData.map((post) => (
    <Post
      id={post.id}
      message={post.message}
      LikesCount={post.likesCount}
      image={post.image}
    />
  ));

  let NewPostElement = React.createRef();

  let OnAddPost = () => {
    props.dispatch({type:'ADD-POST'});
  };

  let onPostChange = () => {
    let text = NewPostElement.current.value;
    props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText:text} );
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
