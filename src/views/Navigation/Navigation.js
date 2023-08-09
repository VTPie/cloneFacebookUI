import React from "react";
import './Navigation.scss'
import '../../assests/icons/icons'
import {
    NavLink
} from 'react-router-dom'
import icons from "../../assests/icons/icons";
import pictures from "../../assests/pictures/pictures";

class Navigation extends React.Component {
    render() {
        return (
            <div className="nav-container">
                <NavLink to="/" exact className="nav-responsive1-show">
                    <img src={icons.home} className="nav-icon"></img>
                    <p className="nav-child">Trang chủ</p>
                </NavLink>
                <NavLink to="/shorts" className="nav-responsive1-show">
                    <img src={icons.shorts} className="nav-icon"></img>
                    <p className="nav-child">Shorts</p>
                </NavLink>
                <NavLink to="/subscriptions" className="nav-responsive1-show">
                    <img src={icons.subscibe} className="nav-icon"></img>
                    <p className="nav-child">Kênh đăng ký</p>
                </NavLink>
                <hr className="nav-responsive1-hide"></hr>
                <NavLink to="/library" className="nav-responsive1-show">
                    <img src={icons.library} className="nav-icon"></img>
                    <p className="nav-child">Thư viện</p>
                </NavLink>
                <NavLink to="/history" className="nav-responsive1-hide">
                    <img src={icons.recent} className="nav-icon"></img>
                    <p className="nav-child">Video đã xem</p>
                </NavLink>
                <NavLink to="/myvideo" className="nav-responsive1-hide">
                    <img src={icons.channel} className="nav-icon"></img>
                    <p className="nav-child">Video của bạn</p>
                </NavLink>
                <NavLink to="/playlist" className="nav-responsive1-hide">
                    <img src={icons.bookmark} className="nav-icon"></img>
                    <p className="nav-child">Xem sau</p>
                </NavLink>
                <NavLink to="/favorite" className="nav-responsive1-hide">
                    <img src={icons.fvr} className="nav-icon"></img>
                    <p className="nav-child">Video đã thích</p>
                </NavLink>
                <NavLink to="/more" className="nav-responsive1-hide">
                    <img src={icons.down} className="nav-icon"></img>
                    <p className="nav-child">Thêm</p>
                </NavLink>
                <hr className="nav-responsive1-hide"></hr>
                <p className="nav-title nav-responsive1-hide" >Khám phá</p>
                <NavLink to="/trending" className="nav-responsive1-hide">
                    <img src={icons.trending} className="nav-icon"></img>
                    <p className="nav-child">Thịnh hành</p>
                </NavLink>
                <NavLink to="/music" className="nav-responsive1-hide">
                    <img src={icons.music} className="nav-icon"></img>
                    <p className="nav-child">Âm nhạc</p>
                </NavLink>
                <NavLink to="/game" className="nav-responsive1-hide">
                    <img src={icons.gaming} className="nav-icon"></img>
                    <p className="nav-child">Trò chơi</p>
                </NavLink>
                <NavLink to="/news" className="nav-responsive1-hide">
                    <img src={icons.news} className="nav-icon"></img>
                    <p className="nav-child">Tin tức</p>
                </NavLink>
                <NavLink to="/sport" className="nav-responsive1-hide">
                    <img src={icons.sports} className="nav-icon"></img>
                    <p className="nav-child">Thể thao</p>
                </NavLink>
                <hr className="nav-responsive1-hide"></hr>
                <p className="nav-title nav-responsive1-hide">Dịch vụ khác của Youtube</p>
                <NavLink to="/yPremium" className="nav-responsive1-hide">
                    <img src={pictures.premium} className="nav-picture"></img>
                    <p className="nav-child">YouTube Premium</p>
                </NavLink>
                <NavLink to="/yStudio" className="nav-responsive1-hide">
                    <img src={pictures.studio} className="nav-picture"></img>
                    <p className="nav-child">YouTube Studio</p>
                </NavLink>
                <NavLink to="/yMusic" className="nav-responsive1-hide">
                    <img src={pictures.music} className="nav-picture"></img>
                    <p className="nav-child">YouTube Music</p>
                </NavLink>
                <NavLink to="/yKids" className="nav-responsive1-hide">
                    <img src={pictures.kid} className="nav-picture"></img>
                    <p className="nav-child">YouTube Kids</p>
                </NavLink>
                <hr className="nav-responsive1-hide"></hr>
                <NavLink to="/setting" className="nav-responsive1-hide">
                    <img src={icons.setting} className="nav-icon"></img>
                    <p className="nav-child">Cài đặt</p>
                </NavLink>
                <NavLink to="/reporthistory" className="nav-responsive1-hide">
                    <img src={icons.report} className="nav-icon"></img>
                    <p className="nav-child">Nhật ký báo cáo</p>
                </NavLink>
                <NavLink to="/help" className="nav-responsive1-hide">
                    <img src={icons.help} className="nav-icon"></img>
                    <p className="nav-child">Trợ giúp</p>
                </NavLink>
                <NavLink to="/feedback" className="nav-responsive1-hide">
                    <img src={icons.res} className="nav-icon"></img>
                    <p className="nav-child">Gửi ý kiến phản hồi</p>
                </NavLink>
            </div>
        )
    }
}
export default Navigation