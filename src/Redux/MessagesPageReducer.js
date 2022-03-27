let initialState = {
  messageData: [
    {
      image: "https://vologdamarafon.ru/static/img/no-photo.png",
      message: "Privet Dima",
    },
    {
      image:
          "https://www.meme-arsenal.com/memes/b5b6a757d1bd204196272992a74ebec3.jpg",
      message: "Ny privet",
    },
  ],
  newMessageText: "<type here>",
};

const MessagesPageReducer = (state=initialState, action) => {

  let stateCopy;

  switch (action.type) {
    case "SEND_MESSAGE": {
      let newMessage = {
        image: "https://vologdamarafon.ru/static/img/no-photo.png",
        message: state.newMessageText,
      };
      stateCopy = {...state};
      stateCopy.messageData = [...state.messageData]
      stateCopy.messageData.push(newMessage);
      stateCopy.newMessageText = "";
      return stateCopy;
    }
    case "UPDATE_NEW_MESSAGE_TEXT":
      stateCopy = {...state};
      stateCopy.newMessageText = action.newMText;
      return stateCopy;
    case "SET_MESSAGES": {
      return {...state, messageData: [...action.messageData]}
    }
    default:
      return state;
  }
  return state;
};

export const updateNewMessageTextActionCreator = (messageText) => {
  return {
    type: "UPDATE_NEW_MESSAGE_TEXT",
    newMText: messageText,
  };
};

export const sendMessageActionCreator = () => {
  return {
    type: "SEND_MESSAGE",
  };
};

export const setMessagesActionCreator = (messageData) => {
  return {
    type: "SET_MESSAGES",
    messageData: messageData
  };
};

export default MessagesPageReducer
