const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const POST_HAS_LIKED = "POST-HAS-LIKED";
const POST_HAS_DISLIKED = "POST-HAS-DISLIKED";

const ProfilePageReducer = (state, action) => {
  if (action.type === "ADD_POST") {
    let newPost = {
      id: 3,
      message: state.newPostText,
      likesCount: 0,
      DislikesCount: 0,
      image: "https://vologdamarafon.ru/static/img/no-photo.png",
    };
    state.postData.push(newPost);
    state.newPostText = "";
  } else if (action.type === "UPDATE_NEW_POST_TEXT") {
    state.newPostText = action.newText;
  } else if (action.type === "POST_HAS_LIKED") {
    let postIndex = state.postData.findIndex((post) => post.id === action.id);
    state.postData[postIndex].likesCount += 1;
  } else if (action.type === "POST_HAS_DISLIKED") {
    let postIndex = state.postData.findIndex((post) => post.id === action.id);
    state.postData[postIndex].DislikesCount += 1;
  }
  return state;
};

export const postHasDisLikedActionCreator = (id) => {
  return {
    type: "POST_HAS_DISLIKED",
    id: id,
  };
};

export const postHasLikedActionCreator = (id) => {
  return {
    type: "POST_HAS_LIKED",
    id: id,
  };
};

export const addPostActionCreator = () => {
  return {
    type: "ADD_POST",
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: "UPDATE_NEW_POST_TEXT",
    newText: text,
  };
};

export default ProfilePageReducer;
