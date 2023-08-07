import React from "react";
import Navigation from "../../Navigation/Navigation";
import './ContentSub.scss'
import VideoCard from "../../VideoCard/VideoCard";

class ContentSub extends React.Component {
    render() {
        return (
            <div className="contentSub-container">
                <Navigation />
                <div className="contentSub-content">
                    <VideoCard />
                </div>
            </div>
        )
    }
}
export default ContentSub