import React from "react";
import Navigation from "../../Navigation/Navigation";
import './ContentSub.scss'
import VideoCard from "../../VideoCard/VideoCard";
import images from "../../../assests/hardcode/images";

class ContentSub extends React.Component {
    render() {
        return (
            <div className="contentSub-container">
                <Navigation />
                <div className="contentSub-content">
                    <VideoCard
                        thumbnail={images.mv7}
                        avtChanel={images.mv7a}
                        nameVideo={'HOÀ MINZY x BÙI CÔNG NAM | TẾT BÙNG NỘI LỰC | OFFICIAL MV'}
                        nameChanel={'Hòa Minzy'}
                        views={'1.000.000 lượt xem'} />
                </div>
            </div>
        )
    }
}
export default ContentSub