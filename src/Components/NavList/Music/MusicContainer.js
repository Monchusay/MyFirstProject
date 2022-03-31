import {connect} from "react-redux";
import {setCurrentPageActionCreator, setMusicActionCreator} from "../../../Redux/MusicPageReducer";
import MusicAPIComponent from "./MusicAPIComponent";

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
    songData: state.musicPage.songData,
    pageSize: state.musicPage.pageSize,
    totalSongsCount: state.musicPage.totalSongsCount,
    currentPage: state.musicPage.currentPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    setMusic: (songData) => {
      dispatch(setMusicActionCreator(songData))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageActionCreator(pageNumber))
    }
  }
}

const MusicContainer = connect (mapStateToProps, mapDispatchToProps)(MusicAPIComponent);

export default MusicContainer;
