import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../Redux/ProfilePageReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

  let state=props.store.getState()

  let OnAddPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <MyPosts
    updateNewPostText={onPostChange}
    addPost={OnAddPost}
    postData={state.profilePage.postData}
    newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
