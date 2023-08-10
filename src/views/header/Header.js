import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import './Header.scss'

class Header extends React.Component {
    render() {
        return (
            <div className="header-container">
                {/* handleChangeOverlay={this.props.handleChangeOverlay} */}
                <Logo />
                <SearchBar />
                <Profile />
            </div>
        )
    }
}
export default Header