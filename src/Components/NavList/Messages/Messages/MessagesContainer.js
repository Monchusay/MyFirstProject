import React from "react";
import {sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../../Redux/MessagesPageReducer";
import Messages from "./Messages";
import StoreContext from "../../../../StoreContext";

const MessagesContainer = () => {
  return (
      <StoreContext.Consumer>
        { (store) => {
        let state=store.getState()

        let OnSendMessage = () => {
          store.dispatch(sendMessageActionCreator());
        };

        let OnMessageChange = (messageText) => {
          store.dispatch(updateNewMessageTextActionCreator(messageText));
        };

        return <Messages
            sendMessage={OnSendMessage}
            updateNewMessageText={OnMessageChange}
            newMessageText={state.messagesPage.newMessageText}
            messageData={state.messagesPage.messageData}
        />
      }
        }
      </StoreContext.Consumer>
  );
};

export default MessagesContainer;
