import React from "react";
import {
  addPostActionCreator, postHasDisLikedActionCreator, postHasLikedActionCreator, setPostsActionCreator,
  updateNewPostTextActionCreator,
} from "../../../Redux/ProfilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import MyPostsClass from "./MyPostsClass";

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
    postHasLiked: (id) => {
      dispatch(postHasLikedActionCreator(id))
    },
    postHasDisliked: (id) => {
      dispatch(postHasDisLikedActionCreator(id))
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    setPosts: (postData) => {
      dispatch(setPostsActionCreator(postData))
    }
  }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPostsClass);

export default MyPostsContainer;
