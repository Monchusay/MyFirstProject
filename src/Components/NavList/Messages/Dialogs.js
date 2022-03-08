import style from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages"
import { Routes, Route } from "react-router-dom";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((dialog) => (
    <Dialog image={dialog.image} username={dialog.name} id={dialog.id} />
  ));

  return (
    <div className={style.Dialogs}>
      <div className={style.DialogItems}>{dialogsElements}</div>
      <div className={style.Messages}>
        <Routes>
          <Route path="/1" element={<Messages newMessageText={props.newMessageText} dispatch={props.dispatch} messageData={props.messageData}/>} />
        </Routes>
      </div>
    </div>
  );
};

export default Dialogs;
