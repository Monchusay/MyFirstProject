import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./Redux/State";

let RerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                dispatch={store.dispatch.bind(store)}
                postData={store.getState().profilePage.postData}
                songData={store.getState().musicPage.songData}
                dialogsData={store.getState().dialogPage.dialogsData}
                shortcutData={store.getState().friendsPage.shortcutData}
                newPostText={store.getState().profilePage.newPostText}
            />
        </React.StrictMode>,
        document.getElementById("root")
    );
}

RerenderTree(store.getState());

store.subscribe(RerenderTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
