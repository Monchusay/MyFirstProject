import {setUserProfileActionCreator} from "../../../Redux/ProfilePageReducer";
import {connect} from "react-redux";
import ProfileData from "./ProfileData";



let mapStateToProps = (state) => {
    return {
        profileInfoData:state.profilePage.profileInfoData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (profileInfoData) => {
            dispatch(setUserProfileActionCreator(profileInfoData))
        },
    }
}

const ProfileDataContainer = connect (mapStateToProps, mapDispatchToProps)(ProfileData);

export default ProfileDataContainer