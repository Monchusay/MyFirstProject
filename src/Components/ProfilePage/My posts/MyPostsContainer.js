import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../Redux/ProfilePageReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {

  return (
    <StoreContext.Consumer>
      { (store) => {

      let state=store.getState()

      let OnAddPost = () => {
        store.dispatch(addPostActionCreator());
      };

      let onPostChange = (text) => {
        store.dispatch(updateNewPostTextActionCreator(text));
      };

      return <MyPosts
          updateNewPostText={onPostChange}
          addPost={OnAddPost}
          postData={state.profilePage.postData}
          newPostText={state.profilePage.newPostText}
      />
    }
    }
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
