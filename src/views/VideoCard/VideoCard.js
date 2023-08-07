import React from "react";
import './VideoCard.scss'

class VideoCard extends React.Component {
    render() {
        return (
            <div className="card-container">
                <div className="card-thumbnail">
                </div>
                <div className="card-infor">
                    <div className="card-avtChanel"></div>
                    <div className="card-meta">
                        <div className="card-nameChanel"></div>
                        <div className="card-views">
                        </div>
                    </div>
                    <div className="card-menu"></div>
                </div>
            </div>
        )
    }
}
export default VideoCard
