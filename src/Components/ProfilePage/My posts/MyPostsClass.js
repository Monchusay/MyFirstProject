import style from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";
import axios from "axios";

class MyPostsClass extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get("https://my-json-server.typicode.com/Monchusay/MyFirstProject/postData").then(response => {
      this.props.setPosts(response.data)
    })
  }

  postElements = this.props.postData.map((post) => (
    <Post
        postHasLiked={this.props.postHasLiked}
        postHasDisliked={this.props.postHasDisliked}
        key={post.id}
      {...post}
    />
  ));

  NewPostElement = React.createRef();

  OnAddPost = () => {
    this.props.addPost();
  };

  onPostChange = () => {
    let text = this.NewPostElement.current.value;
    this.props.updateNewPostText(text);
  };

  render () {
    return (
        <div className={style.item1}>
          My Posts
          <div className={style.item1}>
        <textarea
            placeholder="Type here"
            onChange={this.onPostChange}
            className={style.textareaNewPost}
            ref={this.NewPostElement}
            value={this.props.newPostText}
        />
            <div>
              <button onClick={this.OnAddPost}> Add post</button>
            </div>
          </div>
          <div className={style.item1}>{this.postElements}</div>
        </div>
    );
  }
};

export default MyPostsClass;
