import React from "react";
import menu from '../../assests/icons/menu.png'
import logo from '../../assests/pictures/logo.png'

class Logo extends React.Component {
    render() {
        return (
            <div className="logo-container">
                <div className="logo-menu">
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