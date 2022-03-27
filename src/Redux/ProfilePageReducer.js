let initialState = {
  postData: [],
  newPostText: "",
};

const ProfilePageReducer = (state = initialState, action) => {

  let stateCopy;
  stateCopy = {...state}
  stateCopy.postData = [...state.postData]

  switch (action.type) {
    case "ADD_POST":
      let newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 0,
        DislikesCount: 0,
        image: "https://vologdamarafon.ru/static/img/no-photo.png",
      };
      stateCopy.postData.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    case "UPDATE_NEW_POST_TEXT":
      stateCopy.newPostText = action.newText;
      return stateCopy;
    case "POST_HAS_LIKED":
      let postIndex1 = stateCopy.postData.findIndex((post) => post.id === action.id);
      stateCopy.postData[postIndex1].likesCount += 1;
      return stateCopy;
    case "POST_HAS_DISLIKED":
      let postIndex = stateCopy.postData.findIndex((post) => post.id === action.id);
      stateCopy.postData[postIndex].DislikesCount += 1;
      return stateCopy;
    case "SET_POSTS": {
      return {stateCopy, postData: [...action.postData]}
    }
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

export const setPostsActionCreator = (postData) => {
  return {
    type: "SET_POSTS",
    postData: postData
  };
};

export default ProfilePageReducer;
