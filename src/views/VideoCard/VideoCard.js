import React from "react";
import './VideoCard.scss'
import more from '../../assests/icons/more.png'

class VideoCard extends React.Component {
    render() {
        return (
            <div className="card-container">
                <div className="card-thumbnail">
                    <img src={this.props.thumbnail} alt="Thumbnail video" className="card-thumnail-img"></img>
                </div>
                <div className="card-infor">
                    <div className="card-avtChanel">
                        <img src={this.props.avtChanel} className="card-avtChanel-img"></img>
                    </div>
                    <div className="card-meta">
                        <p className="card-nameVideo">{this.props.nameVideo}</p>
                        <p className="card-nameChanel">{this.props.nameChanel}</p>
                        <p className="card-views">{this.props.views}</p>
                    </div>
                    <div className="card-menu">
                        <img src={more} className="card-moreIcon" alt="More icon" />
                    </div>
                </div>
            </div>
        )
    }
}
export default VideoCard
