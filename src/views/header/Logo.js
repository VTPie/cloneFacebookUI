import React from "react";
import menu from '../../assests/icons/menu.png'
import logo from '../../assests/pictures/logo.png'

class Logo extends React.Component {
    handleHideNav = () => {
        var nav1 = document.getElementById("content-nav");
        var nav2 = document.getElementById("content-mininav");
        var content = document.getElementById("content-video");
        var overlay = document.getElementById("overlay");
        var maxnav = document.getElementById("maxnav-container");
        // let width = window.innerWidth

        if (nav1.className === "content-nav" && nav2.className === "content-mininav"
            && content.className === "content-video" && overlay.className === "overlay"
            && maxnav.className === "maxnav-container") {
            nav1.className += " clickBtnMenu";
            nav2.className += " clickBtnMenu";
            content.className += " clickBtnMenu";
            overlay.className += " clickBtnMenu";
            maxnav.className += " clickBtnMenu";
            // if (width < 1368) {
            //     this.props.handleChangeOverlay()
            //     console.log('>>> logo component call change state')
            // }
        } else {
            nav1.className = "content-nav";
            nav2.className = "content-mininav";
            content.className = "content-video";
            overlay.className = "overlay";
            maxnav.className = "maxnav-container";
        }
    }

    render() {
        return (

            <div className="logo-container">
                <div className="logo-menu" id="logo-menu" onClick={() => this.handleHideNav()}>
                    <img src={menu} className="logo-menuIcon" alt="menu" />
                </div>
                <div className="logo-logo">
                    <img src={logo} className="logo-logoIcon" alt="logo" />
                </div>
            </div>

        )
    }
}
export default Logo