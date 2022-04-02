import React, { useEffect, useState } from "react";
import axios from "axios";
import Music from "./Music";
import preloader2 from "../../../preloader2.svg";

const MusicAPIComponent = (props) => {
  useEffect(() => {
    props.toggleIsFetching(true);
    axios
      .get(
        `https://my-json-server.typicode.com/Monchusay/MyFirstProject/songData?_page=${props.currentPage}&_limit=${props.pageSize}`
      )
      .then((response) => {
        props.toggleIsFetching(false);
        props.setMusic(response.data);
      });
  }, []);

  let onPageChange = (pageNumber) => {
    props.toggleIsFetching(true);
    props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://my-json-server.typicode.com/Monchusay/MyFirstProject/songData?_page=${pageNumber}&_limit=${props.pageSize}`
      )
      .then((response) => {
        props.toggleIsFetching(false);
        props.setMusic(response.data);
      });
  };

  return (
      <Music
        totalSongsCount={props.totalSongsCount}
        pageSize={props.pageSize}
        songData={props.songData}
        onPageChange={onPageChange}
        isFetching={props.isFetching}
      />
  );
};

export default MusicAPIComponent;
