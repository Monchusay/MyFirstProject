import style from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Pizdec from "./Dialog/1234";
import { Routes, Route } from "react-router-dom";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((dialog) => (
    <Dialog image={dialog.image} username={dialog.name} id={dialog.id} />
  ));

  return (
    <div className={style.Dialogs}>
      <div className={style.DialogItems}>{dialogsElements}</div>
      <div>
        <Routes>
          <Route path="/1" element={<Pizdec />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dialogs;
