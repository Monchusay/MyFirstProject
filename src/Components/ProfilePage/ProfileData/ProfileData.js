import React, {useEffect} from "react";
import axios from "axios";
import Preloader from "../../Common/Preloader";

const ProfileData = (props) => {

    useEffect(() => {
        axios
            .get(
                "https://my-json-server.typicode.com/Monchusay/MyFirstProject/profileInfoData"
            )
            .then((response) => {
                props.setUserProfile(response.data);
            });
    }, []);

    if (props.profileInfoData.length == 0 ) {
        return <Preloader />;
    }

    return (
        <div>
            <img src={props.profileInfoData[0].photo}/>
        </div>
    )
}

export default ProfileData