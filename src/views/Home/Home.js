import React from "react";
import Header from "../Header/Header";
import ContentHome from "./ContentHome/ContentHome";
import MaxNav from "../Navigation/MaxNav";
import './Home.scss'

class Home extends React.Component {
    state = {
        stateOverlay: false
    }

    handleClickOverlay = () => {
        var overlay = document.getElementById("overlay");
        var maxnav = document.getElementById("maxnav-container");

        if (overlay.className === "overlay" && maxnav.className === "maxnav-container") {
            overlay.className += " closeOverlay";
            maxnav.className += " closeOverlay";
        } else {
            overlay.className = "overlay";
            maxnav.className = "maxnav-container";
        }
    }

    render() {
        return (
            <>
                <div className="home-container">
                    <div className='home-header'>
                        <Header />
                    </div>
                    <div className="home-content">
                        <ContentHome />
                    </div>
                </div>
                <div className="overlay" id="overlay" onClick={() => this.handleClickOverlay()}>
                </div>
                <div id="home-maxnav" className="home-maxnav">
                    <MaxNav />
                </div>
            </>

        )
    }
}
export default Home