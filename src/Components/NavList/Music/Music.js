import style from "./Music.module.css";
import { NavLink } from "react-router-dom";
import Song from "./Song/Song";
import React from "react";
import axios from "axios";

const Music = (props) => {

  if (props.songData.length===0) {
    axios.get("https://my-json-server.typicode.com/Monchusay/MyFirstProject/data").then(response => {
      props.setMusic(response.data)
    })
  }

  let songElement = props.songData.map((song) => (
    <Song
      key={song.songName}
      image={song.image}
      singer={song.singer}
      songname={song.songName}
    />
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
}

export default Music;
