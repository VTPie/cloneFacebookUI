import React from "react";
import Navigation from '../../Navigation/Navigation'
import './ContentHome.scss'
import VideoCard from '../../VideoCard/VideoCard'

class ContentHome extends React.Component {
    render() {
        return (
            <div className="content-container">
                <Navigation />
                <div className="content-video">
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                </div>
            </div>
        )
    }
}
export default ContentHome