import React from "react";
import upVideo from '../../assests/icons/create.png'
import notification from '../../assests/icons/notification.png'
import avt from '../../assests/pictures/user.png'

class Profile extends React.Component {
    render() {
        return (
            <div className="profile-container">
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