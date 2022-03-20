let initialState = {
  postData: [
    {
      id: 1,
      message: "I wanna commit suicide",
      likesCount: 69,
      DislikesCount: 11,
      image: "https://thedb.ru/upload/image/toad.png",
    },
    {
      id: 2,
      message: "Go on then Lol",
      likesCount: 20,
      DislikesCount: 42,
      image:
          "https://static8.depositphotos.com/1156926/1012/i/600/depositphotos_10120856-stock-photo-toad-isolated-on-white-background.jpg",
    },
  ],
  newPostText: "<type here>",
};

const ProfilePageReducer = (state = initialState, action) => {

  let stateCopy;

  if (action.type === "ADD_POST") {
    let newPost = {
      id: 3,
      message: state.newPostText,
      likesCount: 0,
      DislikesCount: 0,
      image: "https://vologdamarafon.ru/static/img/no-photo.png",
    };
    stateCopy = {...state}
    stateCopy.postData = [...state.postData]
    stateCopy.postData.push(newPost);
    stateCopy.newPostText = "";
    return stateCopy;
  } else if (action.type === "UPDATE_NEW_POST_TEXT") {
    stateCopy = {...state}
    stateCopy.newPostText = action.newText;
    return stateCopy;
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
