import {
  postHasDisLikedActionCreator,
  postHasLikedActionCreator,
} from "../../../../Redux/ProfilePageReducer";

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

export default Post;
