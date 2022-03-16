import React from "react";
import {sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../../Redux/MessagesPageReducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {

    let state=props.store.getState()

  let OnSendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  let OnMessageChange = (messageText) => {
    props.store.dispatch(updateNewMessageTextActionCreator(messageText));
  };

  return (
    <Messages
        sendMessage={OnSendMessage}
        updateNewMessageText={OnMessageChange}
        newMessageText={state.messagesPage.newMessageText}
        messageData={state.messagesPage.messageData}
    />
  );
};

export default MessagesContainer;
