import React from "react";
import menu from '../../assests/icons/menu.png'
import logo from '../../assests/pictures/logo.png'
import { withRouter } from "react-router";

class Logo extends React.Component {
    handleHideNav = () => {
        var nav1 = document.getElementById("content-nav");
        var nav2 = document.getElementById("content-mininav");
        var content = document.getElementById("content-video");
        var overlay = document.getElementById("overlay");
        var maxnav = document.getElementById("maxnav-container");

        if (window.innerWidth > 1368) {
            if (nav1.className === "content-nav" && nav2.className === "content-mininav"
                && content.className === "content-video" && overlay.className === "overlay"
                && maxnav.className === "maxnav-container") {
                nav1.classList.add('clickBtnMenu')
                nav2.classList.add('clickBtnMenu')
                content.classList.add('clickBtnMenu')
                overlay.classList.add('clickBtnMenu')
                maxnav.classList.add('clickBtnMenu')
            }
            else {
                nav1.classList.remove('clickBtnMenu')
                nav2.classList.remove('clickBtnMenu')
                content.classList.remove('clickBtnMenu')
                overlay.classList.remove('clickBtnMenu')
                maxnav.classList.remove('clickBtnMenu')
            }
        }
        else {
            if (overlay.className === "overlay"
                && maxnav.className === "maxnav-container") {
                overlay.classList.add('clickBtnMenu')
                maxnav.classList.add('clickBtnMenu')
            }
            else {
                overlay.classList.remove('clickBtnMenu')
                maxnav.classList.remove('clickBtnMenu')
            }
        }
    }
    handleGoHome = () => {
        this.props.history.push('/')
    }

    render() {
        return (

            <div className="logo-container">
                <div className="logo-menu" id="logo-menu" onClick={() => this.handleHideNav()}>
                    <img src={menu} className="logo-menuIcon" alt="menu" />
                </div>
                <div className="logo-logo" onClick={() => this.handleGoHome()}>
                    <img src={logo} className="logo-logoIcon" alt="logo" />
                </div>
            </div>

        )
    }
}
export default withRouter(Logo)