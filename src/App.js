import style from "./App.module.css";
import Header from "./Components/Header/Header";
import NavList from "./Components/NavList/NavList";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import News from "./Components/NavList/News/News";
import Settings from "./Components/NavList/Settings/Settings";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import MusicContainer from "./Components/NavList/Music/MusicContainer";
import DialogsContainer from "./Components/NavList/Messages/DialogsContainer";

const App = () => {
  return (
    <BrowserRouter>
      <div className={style.appWrapper}>
        <Header />
        <NavList/>
        <div className={style.MainObj}>
          <Routes>
            <Route
              path="/Music/*"
              element={<MusicContainer/>}
            />
            <Route
              path="/Profile/*"
              element={
                <ProfilePage/>
              }
            />
            <Route
              path="/Dialogs/*"
              element={
                <DialogsContainer/>
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
