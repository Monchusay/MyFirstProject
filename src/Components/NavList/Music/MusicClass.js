import style from "./Music.module.css";
import { NavLink } from "react-router-dom";
import Song from "./Song/Song";
import React from "react";
import axios from "axios";

class MusicClass extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get("https://my-json-server.typicode.com/Monchusay/MyFirstProject/data").then(response => {
      this.props.setMusic(response.data.songData)
    })
  }

  songElement = this.props.songData.map((song) => (
    <Song
      key={song.songName}
      image={song.image}
      singer={song.singer}
      songname={song.songName}
    />
  ));

  render() {
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
        <div className={style.MySongs}>{this.songElement}</div>
      </div>
    );
  }
}

export default MusicClass;
