import React from "react";
import upVideo from '../../assests/icons/create.png'
import notification from '../../assests/icons/notification.png'
import avt from '../../assests/pictures/user.png'
import icons from '../../assests/icons/icons'

class Profile extends React.Component {
    render() {
        return (
            <div className="profile-container">
                <div className="profile-search header-responsive3">
                    <img src={icons.search} className="profile-searchIcon" alt="Seach button" />
                </div>
                <div className="profile-mic header-responsive3">
                    <img src={icons.mic} className="profile-micIcon" alt="Mic button" />
                </div>
                <div className="profile-upload">
                    <img src={upVideo} className="profile-uploadIcon" alt="upload video" />
                </div>
                <div className="profile-notification">
                    <img src={notification} className="profile-notificationIcon" alt="notification" />
                </div>
                <img src={avt} className="profile-avt" alt="avt" />
            </div>
        )
    }
}
export default Profile