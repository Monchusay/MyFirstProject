import React, { useEffect, useState } from "react";
import axios from "axios";
import Music from "./Music";

const MusicAPIComponent = (props) => {


  useEffect(() => {
    axios.get(
        `https://my-json-server.typicode.com/Monchusay/MyFirstProject/songData?_page=${props.currentPage}&_limit=${props.pageSize}`)
      .then((response) => {
        props.setMusic(response.data);
      });
  }, []);


  let onPageChange = (pageNumber) => {
      props.setCurrentPage(pageNumber)
      axios.get(
          `https://my-json-server.typicode.com/Monchusay/MyFirstProject/songData?_page=${pageNumber}&_limit=${props.pageSize}`)
          .then((response) => {
              props.setMusic(response.data);
          });
  }

  return <Music
      totalSongsCount={props.totalSongsCount}
      pageSize={props.pageSize}
      songData={props.songData}
      onPageChange={onPageChange}
  />
};

export default MusicAPIComponent;
