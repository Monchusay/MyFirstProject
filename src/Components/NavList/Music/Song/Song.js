import style from "./Song.module.css"

const Song = (props) => {
    return (
        <div className={style.Song}>
            <img src={props.image} />{props.singer}{props.songname}
        </div>
    );
};
export default Song;