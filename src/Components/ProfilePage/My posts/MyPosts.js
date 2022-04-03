import style from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";
import axios from "axios";

const MyPosts = (props) => {
  if (props.postData.length === 0) {
    axios
      .get(
        "https://my-json-server.typicode.com/Monchusay/MyFirstProject/postData"
      )
      .then((response) => {
        props.setPosts(response.data);
      });
  }

  let postElements = props.postData.map((post) => (
    <Post
      postHasLiked={props.postHasLiked}
      postHasDisliked={props.postHasDisliked}
      key={post.id}
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
    <div>
      <div>
        <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_focal-760x428,f_auto,q_auto:best/MSNBC/Components/Video/201609/a_ov_Pepe_160928.jpg" />
      </div>
      <div className={style.item1}>
        My Posts
        <div className={style.item1}>
          <textarea
            placeholder="Type here"
            onChange={onPostChange}
            className={style.textareaNewPost}
            ref={NewPostElement}
            value={props.newPostText}
          />
          <div>
            <button onClick={OnAddPost}> Add post</button>
          </div>
        </div>
        <div className={style.item1}>{postElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
