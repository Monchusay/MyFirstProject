import {combineReducers, createStore} from "redux";
import MessagesPageReducer from "./MessagesPageReducer";
import ProfilePageReducer from "./ProfilePageReducer";
import FriendsPageReducer from "./FriendsPageReducer";
import DialogPageReducer from "./DialogPageReducer";
import MusicPageReducer from "./MusicPageReducer";
import AllUsersPageReducer from "./AllUsersPageReducer";
import NewsPageReducer from "./NewsPageReducer";

let reducers = combineReducers({
    newsPage: NewsPageReducer,
    allUsersPage: AllUsersPageReducer,
    messagesPage: MessagesPageReducer,
    profilePage: ProfilePageReducer,
    friendsPage: FriendsPageReducer,
    dialogPage: DialogPageReducer,
    musicPage: MusicPageReducer
});

let store = createStore(reducers);
window.store = store;

export default store