import React from "react";
import Header from "../Header/Header";
import ContentHome from "./ContentHome/ContentHome";
import MaxNav from "../Navigation/MaxNav";
import './Home.scss'

class Home extends React.Component {

    handleClickOverlay = () => {
        var overlay = document.getElementById("overlay");
        var maxnav = document.getElementById("maxnav-container");
        var nav1 = document.getElementById("content-nav");
        var nav2 = document.getElementById("content-mininav");
        var content = document.getElementById("content-video");

        if (overlay.className !== "overlay" && maxnav.className !== "maxnav-container") {
            overlay.className = "overlay";
            maxnav.className = "maxnav-container";
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