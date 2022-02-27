import style from "./Music.module.css";
import { NavLink } from "react-router-dom";
import Song from "./Song/Song";

const Music = (props) => {

  let songElement = props.songData.map((song) => (
    <Song image={song.image} singer={song.singer} songname={song.songname} />
  ));

  return (
    <div>
      <div className={style.Music}>
        <div>
          <NavLink to="/Music/MyMusic" className={style.MyMusic}>
            My Music
          </NavLink>
        </div>
        <div>
          <NavLink to="/Music/Recommended" className={style.Recommended}>
            Recommended
          </NavLink>
        </div>
      </div>
      <div className={style.MySongs}>{songElement}</div>
    </div>
  );
};

export default Music;
