import style from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let messagesElements = props.messagesData.map((message) => (
    <Message message={message.message} id={message.id} />
  ));

  let dialogsElements = props.dialogsData.map((dialog) => (
    <Dialog image={dialog.image} username={dialog.name} id={dialog.id} />
  ));

  return (
    <div className={style.Dialogs}>
      <div className={style.DialogItems}>{dialogsElements}</div>
      <div className={style.Messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
