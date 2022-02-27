import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {addPost} from "./Redux/State"

export let RerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                addPost={addPost}
                postData={state.profilePage.postData}
                songData={state.musicPage.songData}
                messagesData={state.dialogPage.messagesData}
                dialogsData={state.dialogPage.dialogsData}
                shortcutData={state.friendsPage.shortcutData}
                newPostText={state.profilePage.newPostText}
            />
        </React.StrictMode>,
        document.getElementById("root")
    );
}