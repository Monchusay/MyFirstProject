import {combineReducers, createStore} from "redux";
import MessagesPageReducer from "./MessagesPageReducer";
import ProfilePageReducer from "./ProfilePageReducer";

let reducers = combineReducers({
    messagesPage: MessagesPageReducer,
    profilePage: ProfilePageReducer,
});

let store = createStore(reducers);

export default store