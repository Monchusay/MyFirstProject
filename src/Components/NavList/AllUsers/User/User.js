import style from "./User.module.css"
import React from "react";

const User = (props) => {

    let OnFollow = () => {
        props.followUser(props.id)
    }
    let OnUnfollow = () => {
        props.unfollowUser(props.id)
    }

        return (
            <div className={style.User}>
                <div className={style.profilePicture}>
                    <img src={props.profilePicture}/>
                </div>
                <div className={style.fullName}>
                    {props.fullName}
                </div>
                <div className={style.status}>
                    {props.status}
                </div>
                <div className={style.location}>
                    {props.location}
                </div>
                <div className={style.followButton}>
                    {props.followed
                        ? <button onClick={OnFollow} className={style.FollowButton}> Follow </button>
                        : <button onClick={OnUnfollow} className={style.UnfollowButton}> Unfollow </button>
                    }
                </div>
            </div>
        )
    }

export default User