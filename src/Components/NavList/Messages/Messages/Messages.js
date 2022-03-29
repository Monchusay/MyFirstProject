import style from "./Messages.module.css";
import Message from "./Message/Message";
import React from "react";
import axios from "axios";

const Messages = (props) => {

    if (props.messageData.length===0) {
        axios.get("https://my-json-server.typicode.com/Monchusay/MyFirstProject/messageData").then(response => {
            props.setMessages(response.data)
        })
    }

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
            placeholder="Type here"
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
