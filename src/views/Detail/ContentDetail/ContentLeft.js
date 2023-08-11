import React from "react";

class ContentLeft extends React.Component {
    render() {
        return (
            <div className="contLeft-container">
                <div className="contLeft-video">
                    <iframe
                        className="contLeft-iframe"
                        src="https://www.youtube.com/embed/djyPhWBEEgQ"
                        title="Yêu 3 Năm Dại 1 Giờ - Chu Thúy Quỳnh | Official Music Video"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </div>

                {/* <img src={pictures.mv1} alt="Thumbnail video" className="contLeft-iframe"></img> */}
            </div>
        )
    }
}
export default ContentLeft