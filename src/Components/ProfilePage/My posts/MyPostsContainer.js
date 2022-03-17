import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../Redux/ProfilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

/*const MyPostsContainer = () => {

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
};*/

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
