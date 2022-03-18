import {
  postHasDisLikedActionCreator,
  postHasLikedActionCreator,
} from "../../../../Redux/ProfilePageReducer";
import {connect} from "react-redux";
import Post from "./Post";

/*
const Post = (props) => {

    let state = props.store.getState()

  const PostHasLiked = () => {
    props.store.dispatch(postHasLikedActionCreator(props.id));
  };

  const PostHasDisliked = (id) => {
    props.store.dispatch(postHasDisLikedActionCreator(props.id));
  };

  return (
    <Post
        store={props.store}
        PostLiked={PostHasLiked}
        PostDisliked={PostHasDisliked}
        likesCount={state.profilePage.postData.likesCount}
        DislikesCount={state.profilePage.postData.DislikesCount}

    />
  );
};
*/


let mapStateToProps = (state) => {
  return {
    likesCount: state.profilePage.postData.likesCount,
    DislikesCount: state.profilePage.postData.DislikesCount
  }
}

let mapDispatchToProps = (dispatch,state) => {
  let id = state.id
  return {
    PostHasLiked: (id) => {
      dispatch(postHasLikedActionCreator(id));
    },
    PostHasDisliked: (id) => {
      dispatch(postHasDisLikedActionCreator(id));
    }
  }
}

const PostContainer = connect (mapStateToProps,mapDispatchToProps)(Post);


export default PostContainer;
