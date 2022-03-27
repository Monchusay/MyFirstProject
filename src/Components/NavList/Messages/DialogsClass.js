import style from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import { Routes, Route } from "react-router-dom";
import React from "react";
import axios from "axios";
import MessagesContainer from "./Messages/MessagesContainer";
import MusicClass from "../Music/MusicClass";

class DialogsClass extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get("https://my-json-server.typicode.com/Monchusay/MyFirstProject/data").then(response => {
            this.props.setDialogs(response.data.dialogsData)
        })
    }

    dialogsElements = this.props.dialogsData.map((dialog) => (
        <Dialog
            key={dialog.id}
            image={dialog.image}
            username={dialog.name}
            id={dialog.id}
        />
    ));

    render() {
        return (
            <div className={style.Dialogs}>
                <div className={style.DialogItems}>{this.dialogsElements}</div>
                <div className={style.Messages}>
                    <Routes>
                        <Route
                            path="/1"
                            element={
                                <MessagesContainer/>
                            }
                        />
                    </Routes>
                </div>
            </div>
        );
    };
}
export default DialogsClass;
