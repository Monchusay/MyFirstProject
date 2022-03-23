import React from "react";
import User from "./User/User";
import style from "./AllUsers.module.css"

const AllUsers = (props) => {

    if (props.UsersData.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: true,
                profilePicture: "https://ichef.bbci.co.uk/news/640/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg",
                fullName: "Pepega",
                status: "Тик-токер со стажем 40 лет",
                location: "Russia"
            },
            {
                id: 2,
                followed: false,
                profilePicture: "https://kuban24.tv/wp-content/uploads/2020/02/zoomzoom.jpg",
                fullName: "OmegaRofler2015",
                status: "Восходящая звезда BrawlStars киберспорта",
                location: "Russia"
            },
            {
                id: 3,
                followed: true,
                profilePicture: "https://www.meme-arsenal.com/memes/b5b6a757d1bd204196272992a74ebec3.jpg",
                fullName: "DimaP",
                status: "Тупо батя",
                location: "Russia"
            }
        ])}

    let userElements =  props.UsersData.map((user)  => (
        <User
            followUser={props.followUser}
            unfollowUser={props.unfollowUser}
            key={user.id}
            {...user}
        />
        ));

    return (
        <div className={style.userElements}>
            {userElements}
        </div>
    )
}

export default AllUsers