import React from "react";
import {
    NavLink
} from 'react-router-dom'
import icons from "../../assests/icons/icons";
import pictures from "../../assests/pictures/pictures";
import './MaxNav.scss'

class MaxNav extends React.Component {
    handleCloseMaxNav = () => {
        var overlay = document.getElementById("overlay");
        var maxnav = document.getElementById("maxnav-container");
        var nav1 = document.getElementById("content-nav");
        var nav2 = document.getElementById("content-mininav");
        var content = document.getElementById("content-video");

        // if (overlay.className !== "overlay" && maxnav.className !== "maxnav-container") {
        //     overlay.className = "overlay";
        //     maxnav.className = "maxnav-container";
        // }
        if (overlay.className !== "overlay") {
            overlay.className = "overlay";
        }
        if (maxnav.className === "maxnav-container clickBtnMenu") {
            maxnav.classList.remove('clickBtnMenu')
        }
        if (nav1.className !== 'content-nav' && nav2.className !== 'content-mininav'
            && content.className !== 'content-video') {
            nav1.className = 'content-nav'
            nav2.className = 'content-nav'
            content.className = 'content-nav'
        }
    }

    render() {
        return (
            <div className="maxnav-container" id="maxnav-container">
                <div className="subHeader">
                    <div className="maxnav-menu" onClick={() => this.handleCloseMaxNav()}>
                        <img src={icons.menu} className="maxnav-menuicon" alt="menu" />
                    </div>
                    <div className="maxnav-logo">
                        <img src={pictures.logo} alt="logo" className="maxnav-logoicon" />
                    </div>
                </div>
                <NavLink to="/" exact>
                    <img src={icons.home} className="maxnav-icon" alt="Icon home"></img>
                    <p className="maxnav-child">Trang chủ</p>
                </NavLink>
                <NavLink to="/shorts">
                    <img src={icons.shorts} className="maxnav-icon" alt="Icon shorts"></img>
                    <p className="maxnav-child">Shorts</p>
                </NavLink>
                <NavLink to="/subscriptions">
                    <img src={icons.subscibe} className="maxnav-icon" alt="Icon subscriptions"></img>
                    <p className="maxnav-child">Kênh đăng ký</p>
                </NavLink>
                <hr></hr>
                <NavLink to="/library">
                    <img src={icons.library} className="maxnav-icon" alt="Icon library"></img>
                    <p className="maxnav-child">Thư viện</p>
                </NavLink>
                <NavLink to="/history">
                    <img src={icons.recent} className="maxnav-icon" alt="Icon history"></img>
                    <p className="maxnav-child">Video đã xem</p>
                </NavLink>
                <NavLink to="/myvideo">
                    <img src={icons.channel} className="maxnav-icon" alt="Icon my video"></img>
                    <p className="maxnav-child">Video của bạn</p>
                </NavLink>
                <NavLink to="/playlist">
                    <img src={icons.bookmark} className="maxnav-icon" alt="Icon playlist"></img>
                    <p className="maxnav-child">Xem sau</p>
                </NavLink>
                <NavLink to="/favorite">
                    <img src={icons.fvr} className="maxnav-icon" alt="Icon favorite"></img>
                    <p className="maxnav-child">Video đã thích</p>
                </NavLink>
                <NavLink to="/more">
                    <img src={icons.down} className="maxnav-icon" alt="Icon more"></img>
                    <p className="maxnav-child">Thêm</p>
                </NavLink>
                <hr></hr>
                <p className="maxnav-title" >Khám phá</p>
                <NavLink to="/trending">
                    <img src={icons.trending} className="maxnav-icon" alt="Icon trending"></img>
                    <p className="maxnav-child">Thịnh hành</p>
                </NavLink>
                <NavLink to="/music">
                    <img src={icons.music} className="maxnav-icon" alt="Icon music"></img>
                    <p className="maxnav-child">Âm nhạc</p>
                </NavLink>
                <NavLink to="/game">
                    <img src={icons.gaming} className="maxnav-icon" alt="Icon game"></img>
                    <p className="maxnav-child">Trò chơi</p>
                </NavLink>
                <NavLink to="/news">
                    <img src={icons.news} className="maxnav-icon" alt="Icon news"></img>
                    <p className="maxnav-child">Tin tức</p>
                </NavLink>
                <NavLink to="/sport">
                    <img src={icons.sports} className="maxnav-icon" alt="Icon sports"></img>
                    <p className="maxnav-child">Thể thao</p>
                </NavLink>
                <hr></hr>
                <p className="maxnav-title">Dịch vụ khác của Youtube</p>
                <NavLink to="/yPremium">
                    <img src={pictures.premium} className="maxnav-picture" alt="YouTube Premium"></img>
                    <p className="maxnav-child">YouTube Premium</p>
                </NavLink>
                <NavLink to="/yStudio">
                    <img src={pictures.studio} className="maxnav-picture" alt="YouTube Studio"></img>
                    <p className="maxnav-child">YouTube Studio</p>
                </NavLink>
                <NavLink to="/yMusic">
                    <img src={pictures.music} className="maxnav-picture" alt="YouTube Music"></img>
                    <p className="maxnav-child">YouTube Music</p>
                </NavLink>
                <NavLink to="/yKids">
                    <img src={pictures.kid} className="maxnav-picture" alt="YouTube Kids"></img>
                    <p className="maxnav-child">YouTube Kids</p>
                </NavLink>
                <hr></hr>
                <NavLink to="/setting">
                    <img src={icons.setting} className="maxnav-icon" alt="Icon Setting"></img>
                    <p className="maxnav-child">Cài đặt</p>
                </NavLink>
                <NavLink to="/reporthistory">
                    <img src={icons.report} className="maxnav-icon" alt="Icon Report history"></img>
                    <p className="maxnav-child">Nhật ký báo cáo</p>
                </NavLink>
                <NavLink to="/help">
                    <img src={icons.help} className="maxnav-icon" alt="Icon help"></img>
                    <p className="maxnav-child">Trợ giúp</p>
                </NavLink>
                <NavLink to="/feedback">
                    <img src={icons.res} className="maxnav-icon" alt="Icon feedback"></img>
                    <p className="maxnav-child">Gửi ý kiến phản hồi</p>
                </NavLink>
            </div>
        )
    }
}
export default MaxNav