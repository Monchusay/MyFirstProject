import {connect} from "react-redux";
import {setMusicActionCreator} from "../../../Redux/MusicPageReducer";
import Music from "./Music";

/*
const Music = (props) => {

  let songElement = props.songData.map((song) => (
    <Song key={song.songName} image={song.image} singer={song.singer} songname={song.songName} />
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
*/


let mapStateToProps = (state) => {
  return {
    songData: state.musicPage.songData
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    setMusic: (songData) => {
      dispatch(setMusicActionCreator(songData))
    }
  }
}

const MusicContainer = connect (mapStateToProps, mapDispatchToProps)(Music);

export default MusicContainer;
