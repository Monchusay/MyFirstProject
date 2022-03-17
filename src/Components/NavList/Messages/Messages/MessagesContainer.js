import React from "react";
import {sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../../Redux/MessagesPageReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

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
        }
    }
}
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
