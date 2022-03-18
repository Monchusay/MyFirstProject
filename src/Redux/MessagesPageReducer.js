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
  switch (action.type) {
    case "SEND_MESSAGE": {
      let newMessage = {
        image: "https://vologdamarafon.ru/static/img/no-photo.png",
        message: state.newMessageText,
      };
      let stateCopy = {...state};
      stateCopy.messageData = [...state.messageData]
      stateCopy.messageData.push(newMessage);
      stateCopy.newMessageText = "";
      return stateCopy;
    }
    case "UPDATE_NEW_MESSAGE_TEXT":
      let stateCopy = {...state};
      stateCopy.newMessageText = action.newMText;
      return stateCopy;
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


export default MessagesPageReducer
