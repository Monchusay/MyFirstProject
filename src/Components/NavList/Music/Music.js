import style from "./Music.module.css";
import { NavLink } from "react-router-dom";
import Song from "./Song/Song";
import React, {useEffect} from "react";
import axios from "axios";

const Music = (props) => {

    useEffect(()=> {
            axios.get(`https://my-json-server.typicode.com/Monchusay/MyFirstProject/songData?_page=${props.currentPage}&_limit=${props.pageSize}`).then(response => {
                props.setMusic(response.data)
            })
    })

  let songElement = props.songData.map((song) => (
    <Song
      key={song.songName}
      image={song.image}
      singer={song.singer}
      songname={song.songName}
    />
  ));

        let pagesCount = Math.ceil(props.totalSongsCount / props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
            if (i == 20) break;
        }
        let aaa = pages.map (p => {
            return <span className={props.currentPage === p && style.selectedPage}> {p} </span>
        })



        return (
            <div className={style.musicPage}>
                <div className={style.MyMusic}>
                    <NavLink to="/Music/MyMusic" className={style.MyMusic1}>
                        My Music
                    </NavLink>
                </div>
                <div className={style.Recommended}>
                    <NavLink to="/Music/Recommended" className={style.Recommended1}>
                        Recommended
                    </NavLink>
                </div>
                <div className={style.pagesCount}>
                    {aaa}
                </div>
                <div className={style.MySongs}>{songElement}</div>
            </div>
        )
}

export default Music;
