import style from "./App.module.css";
import Header from "./Components/Header/Header";
import NavList from "./Components/NavList/NavList";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import Dialogs from "./Components/NavList/Messages/Dialogs";
import Music from "./Components/NavList/Music/Music";
import News from "./Components/NavList/News/News";
import Settings from "./Components/NavList/Settings/Settings";
import { Routes, BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={style.appWrapper}>
        <Header />
        <NavList friendsPage={props.state.friendsPage} />
        <div className={style.MainObj}>
          <Routes>
            <Route
              path="/Music/*"
              element={<Music songData={props.state.musicPage.songData} />}
            />
            <Route
              path="/Profile/*"
              element={
                <ProfilePage
                    store={props.store}
                />
              }
            />
            <Route
              path="/Dialogs/*"
              element={
                <Dialogs
                    store={props.store}
                  dialogsData={props.state.dialogPage.dialogsData}
                />
              }
            />
            <Route path="/News/*" element={<News />} />
            <Route path="/Settings/*" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
