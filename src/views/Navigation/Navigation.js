import React from "react";
import './Navigation.scss'
import {
    NavLink
} from 'react-router-dom'
import icons from "../../assests/icons/icons";
import pictures from "../../assests/pictures/pictures";

class Navigation extends React.Component {
    render() {
        return (
            <div className="nav-container">
                <NavLink to="/cloneYoutubeUI/" exact>
                    <img src={icons.home} className="nav-icon" alt="Icon home"></img>
                    <p className="nav-child">Trang chủ</p>
                </NavLink>
                <NavLink to="/shorts">
                    <img src={icons.shorts} className="nav-icon" alt="Icon shorts"></img>
                    <p className="nav-child">Shorts</p>
                </NavLink>
                <NavLink to="/cloneYoutubeUI/subscriptions">
                    <img src={icons.subscibe} className="nav-icon" alt="Icon subscriptions"></img>
                    <p className="nav-child">Kênh đăng ký</p>
                </NavLink>
                <hr></hr>
                <NavLink to="/library">
                    <img src={icons.library} className="nav-icon" alt="Icon library"></img>
                    <p className="nav-child">Thư viện</p>
                </NavLink>
                <NavLink to="/history">
                    <img src={icons.recent} className="nav-icon" alt="Icon history"></img>
                    <p className="nav-child">Video đã xem</p>
                </NavLink>
                <NavLink to="/myvideo">
                    <img src={icons.channel} className="nav-icon" alt="Icon my video"></img>
                    <p className="nav-child">Video của bạn</p>
                </NavLink>
                <NavLink to="/playlist">
                    <img src={icons.bookmark} className="nav-icon" alt="Icon playlist"></img>
                    <p className="nav-child">Xem sau</p>
                </NavLink>
                <NavLink to="/favorite">
                    <img src={icons.fvr} className="nav-icon" alt="Icon favorite"></img>
                    <p className="nav-child">Video đã thích</p>
                </NavLink>
                <NavLink to="/more">
                    <img src={icons.down} className="nav-icon" alt="Icon more"></img>
                    <p className="nav-child">Thêm</p>
                </NavLink>
                <hr></hr>
                <p className="nav-title" >Khám phá</p>
                <NavLink to="/trending">
                    <img src={icons.trending} className="nav-icon" alt="Icon trending"></img>
                    <p className="nav-child">Thịnh hành</p>
                </NavLink>
                <NavLink to="/music">
                    <img src={icons.music} className="nav-icon" alt="Icon music"></img>
                    <p className="nav-child">Âm nhạc</p>
                </NavLink>
                <NavLink to="/game">
                    <img src={icons.gaming} className="nav-icon" alt="Icon game"></img>
                    <p className="nav-child">Trò chơi</p>
                </NavLink>
                <NavLink to="/news">
                    <img src={icons.news} className="nav-icon" alt="Icon news"></img>
                    <p className="nav-child">Tin tức</p>
                </NavLink>
                <NavLink to="/sport">
                    <img src={icons.sports} className="nav-icon" alt="Icon sports"></img>
                    <p className="nav-child">Thể thao</p>
                </NavLink>
                <hr></hr>
                <p className="nav-title">Dịch vụ khác của Youtube</p>
                <NavLink to="/yPremium">
                    <img src={pictures.premium} className="nav-picture" alt="YouTube Premium"></img>
                    <p className="nav-child">YouTube Premium</p>
                </NavLink>
                <NavLink to="/yStudio">
                    <img src={pictures.studio} className="nav-picture" alt="YouTube Studio"></img>
                    <p className="nav-child">YouTube Studio</p>
                </NavLink>
                <NavLink to="/yMusic">
                    <img src={pictures.music} className="nav-picture" alt="YouTube Music"></img>
                    <p className="nav-child">YouTube Music</p>
                </NavLink>
                <NavLink to="/yKids">
                    <img src={pictures.kid} className="nav-picture" alt="YouTube Kids"></img>
                    <p className="nav-child">YouTube Kids</p>
                </NavLink>
                <hr></hr>
                <NavLink to="/setting">
                    <img src={icons.setting} className="nav-icon" alt="Icon Setting"></img>
                    <p className="nav-child">Cài đặt</p>
                </NavLink>
                <NavLink to="/reporthistory">
                    <img src={icons.report} className="nav-icon" alt="Icon Report history"></img>
                    <p className="nav-child">Nhật ký báo cáo</p>
                </NavLink>
                <NavLink to="/help">
                    <img src={icons.help} className="nav-icon" alt="Icon help"></img>
                    <p className="nav-child">Trợ giúp</p>
                </NavLink>
                <NavLink to="/feedback">
                    <img src={icons.res} className="nav-icon" alt="Icon feedback"></img>
                    <p className="nav-child">Gửi ý kiến phản hồi</p>
                </NavLink>
            </div>
        )
    }
}
export default Navigation