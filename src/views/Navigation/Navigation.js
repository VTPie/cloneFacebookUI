import React from "react";
import './Navigation.scss'
import {
    NavLink
} from 'react-router-dom'

class Navigation extends React.Component {
    render() {
        return (
            <div className="nav-container">
                <NavLink to="/" exact>Trang chủ</NavLink>
                <NavLink to="/shorts">Shorts</NavLink>
                <NavLink to="/subscriptions">Kênh đăng ký</NavLink>
                <hr></hr>
                <NavLink to="/library">Thư viện</NavLink>
                <NavLink to="/history">Video đã xem</NavLink>
                <NavLink to="/myvideo">Video của bạn</NavLink>
                <NavLink to="/playlist">Xem sau</NavLink>
                <NavLink to="/favorite">Video đã thích</NavLink>
                <NavLink to="/more">Thêm</NavLink>
                <hr></hr>
                <p className="nav-title">Khám phá</p>
                <NavLink to="/trending">Thịnh hành</NavLink>
                <NavLink to="/music">Âm nhạc</NavLink>
                <NavLink to="/game">Trò chơi</NavLink>
                <NavLink to="/news">Tin tức</NavLink>
                <NavLink to="/sport">Thể thao</NavLink>
                <hr></hr>
                <p className="nav-title">Dịch vụ khác của Youtube</p>
                <NavLink to="/yPremium">YouTube Premium</NavLink>
                <NavLink to="/yStudio">YouTube Studio</NavLink>
                <NavLink to="/yMusic">YouTube Music</NavLink>
                <NavLink to="/yKids">YouTube Kids</NavLink>
                <hr></hr>
                <NavLink to="/setting">Cài đặt</NavLink>
                <NavLink to="/reporthistory">Nhật ký báo cáo</NavLink>
                <NavLink to="/help">Trợ giúp</NavLink>
                <NavLink to="/feedback">Gửi ý kiến phản hồi</NavLink>
            </div>
        )
    }
}
export default Navigation