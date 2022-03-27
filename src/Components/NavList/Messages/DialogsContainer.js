import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {setDialogsActionCreator} from "../../../Redux/DialogPageReducer";

/*const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((dialog) => (
    <Dialog
      key={dialog.id}
      image={dialog.image}
      username={dialog.name}
      id={dialog.id}
    />
  ));

  return (
    <div className={style.Dialogs}>
      <div className={style.DialogItems}>{dialogsElements}</div>
      <div className={style.Messages}>
        <Routes>
          <Route
            path="/1"
            element={
              <MessagesContainer
                  /!*store={props.store}*!/
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};*/

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogPage.dialogsData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setDialogs: (dialogsData) => {
            dispatch(setDialogsActionCreator(dialogsData))
        }
    }
}

const DialogsContainer = connect (mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
