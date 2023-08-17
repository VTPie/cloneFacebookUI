import React from "react";
import {
    NavLink
} from 'react-router-dom'
import icons from "../../assests/icons/icons";
import './MiniNav.scss'

class MiniNav extends React.Component {
    render() {
        return (
            <div className="mininav-container">
                <NavLink to="/cloneYoutubeUI/" exact className="mininav-child">
                    <img src={icons.home} className="mininav-icon" alt="Icon home"></img>
                    <p className="mininav-title">Trang chủ</p>
                </NavLink>
                <NavLink to="/shorts" className="mininav-child">
                    <img src={icons.shorts} className="mininav-icon" alt="Icon shorts"></img>
                    <p className="mininav-title">Shorts</p>
                </NavLink>
                <NavLink to="/cloneYoutubeUI/subscriptions" className="mininav-child">
                    <img src={icons.subscibe} className="mininav-icon" alt="Icon subscription"></img>
                    <p className="mininav-title">Kênh đăng ký</p>
                </NavLink>
                <NavLink to="/library" className="mininav-child">
                    <img src={icons.library} className="mininav-icon" alt="Icon library"></img>
                    <p className="mininav-title">Thư viện</p>
                </NavLink>
            </div>
        )
    }
}
export default MiniNav