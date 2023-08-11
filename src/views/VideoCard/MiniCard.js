import React from "react";
import icons from '../../assests/icons/more.png'
import './MiniCard.scss'

class MiniCard extends React.Component {
    render() {
        return (
            <div className="miniCard-container">
                <div className="miniCard-thumbnail">
                    <img src={this.props.thumbnail} alt="Thumbnail video" className="miniCard-thumnail-img"></img>
                </div>
                <div className="miniCard-meta">
                    <p className="miniCard-nameVideo">{this.props.nameVideo}</p>
                    <p className="miniCard-nameChanel">{this.props.nameChanel}</p>
                    <p className="miniCard-views">{this.props.views}</p>
                </div>
                <div className="miniCard-menu">
                    <img src={icons} className="miniCard-moreIcon" alt="More icon" />
                </div>
            </div>
        )
    }
}
export default MiniCard