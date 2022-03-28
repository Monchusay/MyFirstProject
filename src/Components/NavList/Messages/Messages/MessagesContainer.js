import React from "react";
import {
    sendMessageActionCreator, setMessagesActionCreator,
    updateNewMessageTextActionCreator,
} from "../../../../Redux/MessagesPageReducer";
import {connect} from "react-redux";
import Messages from "./Messages";

/*const MessagesContainer = () => {
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
};*/

let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        messageData: state.messagesPage.messageData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        updateNewMessageText: (messageText) => {
            dispatch(updateNewMessageTextActionCreator(messageText));
        },
        setMessages: (messageData) => {
            dispatch(setMessagesActionCreator(messageData))
        }
    }
}
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
