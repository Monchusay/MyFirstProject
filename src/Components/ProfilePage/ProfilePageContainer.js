import {connect} from "react-redux";
import ProfilePage from "./ProfilePage";
import {setUserProfileActionCreator} from "../../Redux/ProfilePageReducer";

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


const ProfilePageContainer = connect (mapStateToProps, mapDispatchToProps)(ProfilePage);

export default ProfilePageContainer