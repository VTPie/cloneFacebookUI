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
                <NavLink to="/" exact>
                    <img src={icons.home} className="nav-icon"></img>
                    Trang chủ
                </NavLink>
                <NavLink to="/shorts">
                    <img src={icons.shorts} className="nav-icon"></img>
                    Shorts
                </NavLink>
                <NavLink to="/subscriptions">
                    <img src={icons.subscibe} className="nav-icon"></img>
                    Kênh đăng ký
                </NavLink>
                <hr></hr>
                <NavLink to="/library">
                    <img src={icons.library} className="nav-icon"></img>
                    Thư viện
                </NavLink>
                <NavLink to="/history">
                    <img src={icons.recent} className="nav-icon"></img>
                    Video đã xem
                </NavLink>
                <NavLink to="/myvideo">
                    <img src={icons.channel} className="nav-icon"></img>
                    Video của bạn
                </NavLink>
                <NavLink to="/playlist">
                    <img src={icons.bookmark} className="nav-icon"></img>
                    Xem sau
                </NavLink>
                <NavLink to="/favorite">
                    <img src={icons.fvr} className="nav-icon"></img>
                    Video đã thích
                </NavLink>
                <NavLink to="/more">
                    <img src={icons.down} className="nav-icon"></img>
                    Thêm
                </NavLink>
                <hr></hr>
                <p className="nav-title">Khám phá</p>
                <NavLink to="/trending">
                    <img src={icons.trending} className="nav-icon"></img>
                    Thịnh hành
                </NavLink>
                <NavLink to="/music">
                    <img src={icons.music} className="nav-icon"></img>
                    Âm nhạc
                </NavLink>
                <NavLink to="/game">
                    <img src={icons.gaming} className="nav-icon"></img>
                    Trò chơi
                </NavLink>
                <NavLink to="/news">
                    <img src={icons.news} className="nav-icon"></img>
                    Tin tức
                </NavLink>
                <NavLink to="/sport">
                    <img src={icons.sports} className="nav-icon"></img>
                    Thể thao
                </NavLink>
                <hr></hr>
                <p className="nav-title">Dịch vụ khác của Youtube</p>
                <NavLink to="/yPremium">
                    <img src={pictures.premium} className="nav-picture"></img>
                    YouTube Premium
                </NavLink>
                <NavLink to="/yStudio">
                    <img src={pictures.studio} className="nav-picture"></img>
                    YouTube Studio
                </NavLink>
                <NavLink to="/yMusic">
                    <img src={pictures.music} className="nav-picture"></img>
                    YouTube Music
                </NavLink>
                <NavLink to="/yKids">
                    <img src={pictures.kid} className="nav-picture"></img>
                    YouTube Kids
                </NavLink>
                <hr></hr>
                <NavLink to="/setting">
                    <img src={icons.setting} className="nav-icon"></img>
                    Cài đặt
                </NavLink>
                <NavLink to="/reporthistory">
                    <img src={icons.report} className="nav-icon"></img>
                    Nhật ký báo cáo
                </NavLink>
                <NavLink to="/help">
                    <img src={icons.help} className="nav-icon"></img>
                    Trợ giúp
                </NavLink>
                <NavLink to="/feedback">
                    <img src={icons.res} className="nav-icon"></img>
                    Gửi ý kiến phản hồi
                </NavLink>
            </div>
        )
    }
}
export default Navigation