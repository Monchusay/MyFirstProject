import style from "./User.module.css"
import React from "react";

class UserClass extends React.Component {

    OnFollow = () => {
        this.props.followUser(this.props.id)
    }
    OnUnfollow = () => {
        this.props.unfollowUser(this.props.id)
    }

    render() {
        return (
            <div className={style.User}>
                <div className={style.profilePicture}>
                    <img src={this.props.profilePicture}/>
                </div>
                <div className={style.fullName}>
                    {this.props.fullName}
                </div>
                <div className={style.status}>
                    {this.props.status}
                </div>
                <div className={style.location}>
                    {this.props.location}
                </div>
                <div className={style.followButton}>
                    {this.props.followed
                        ? <button onClick={this.OnFollow} className={style.FollowButton}> Follow </button>
                        : <button onClick={this.OnUnfollow} className={style.UnfollowButton}> Unfollow </button>
                    }
                </div>
            </div>
        )
    }
}

export default UserClass