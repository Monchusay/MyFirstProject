import style from "./Messages.module.css";
import Message from "./Message/Message";
import React from "react";
import axios from "axios";

class MessagesClass extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get("https://my-json-server.typicode.com/Monchusay/MyFirstProject/messageData").then(response => {
            this.props.setMessages(response.data)
        })
    }

  messageElements = this.props.messageData.map((message) => (
    <Message
        key={message.message}
        image={message.image}
        message={message.message}
    />
  ));

  NewMessageElement = React.createRef();

  OnSendMessage = () => {
      this.props.sendMessage()
  };

  OnMessageChange = () => {
    let messageText = this.NewMessageElement.current.value;
      this.props.updateNewMessageText(messageText)
  };

render () {
    return (
        <div>
            <div>{this.messageElements}</div>
            <div>
        <textarea
            onChange={this.OnMessageChange}
            ref={this.NewMessageElement}
            value={this.props.newMessageText}
            className={style.MessagesTextarea}
        />
            </div>
            <div>
                <button onClick={this.OnSendMessage}>Send message</button>
            </div>
        </div>
    );
}
};
export default MessagesClass;
