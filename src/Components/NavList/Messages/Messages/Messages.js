import style from "./Messages.module.css";
import Message from "./Message/Message";
import React from "react";

const Messages = (props) => {
  let messageElements = props.messageData.map((message) => (
    <Message
        key={message.message}
        image={message.image}
        message={message.message}
    />
  ));

  let NewMessageElement = React.createRef();

  let OnSendMessage = () => {
    props.sendMessage()
  };

  let OnMessageChange = () => {
    let messageText = NewMessageElement.current.value;
    props.updateNewMessageText(messageText)
  };

  return (
    <div>
      <div>{messageElements}</div>
      <div>
        <textarea
          onChange={OnMessageChange}
          ref={NewMessageElement}
          value={props.newMessageText}
          className={style.MessagesTextarea}
        />
      </div>
      <div>
        <button onClick={OnSendMessage}>Send message</button>
      </div>
    </div>
  );
};
export default Messages;
