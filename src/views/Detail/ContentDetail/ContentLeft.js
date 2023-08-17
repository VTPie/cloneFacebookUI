import React from "react";
import images from '../../../assests/hardcode/images'
import icons from '../../../assests/icons/icons'

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
                <div className="contLeft-infor">
                    <div className="contLeft-nameVid">
                        <p>Yêu 3 Năm Dại 1 Giờ - Chu Thúy Quỳnh | Official Music Video</p>
                    </div>
                    <div className="contLeft-topScope">
                        <div className="top-left-scope">
                            <div className="avtChannel">
                                <img src={images.mv1a} className="avtChanel-img" alt="avatar channel"></img>
                            </div>
                            <div className="infoChannel">
                                <div className="nameChannel">
                                    <p>Chu Thuy Quynh Official</p>
                                </div>
                                <div className="countSubChannel">
                                    <p>174 N người đăng ký</p>
                                </div>
                            </div>
                            <div className="subChannel">
                                <p>Đăng ký</p>
                            </div>
                        </div>
                        <div className="top-right-scope">
                            <div className="like-container">
                                <div className="likeVid">
                                    <img src={icons.like} className="likeVid-icon" alt="like icon"></img>
                                    <p className="likeVid-title">4,6 N</p>
                                </div>
                                <div className="dislikeVid">
                                    <img src={icons.dislike} className="dislikeVid-icon" alt="dislike icon"></img>
                                </div>
                            </div>
                            <div className="shareVid">
                                <img src={icons.share} className="shareVid-icon" alt="share icon"></img>
                                <p className="shareVid-title">Chia sẻ</p>
                            </div>
                            <div className="downVid">
                                <img src={icons.download} className="downVid-icon" alt="download icon"></img>
                                <p className="downVid-title">Tải xuống</p>
                            </div>
                            <div className="moreInfo">
                                <img src={icons.more2} className="moreInfo-icon" alt="more info icon"></img>
                            </div>
                        </div>
                    </div>
                    <div className="contLeft-botScope">
                        <p className="botScope-view">601.476 lượt xem  Đã công chiếu vào 28 thg 8, 2022 </p>
                        <p className="botScope-infor">
                            Yêu 3 Năm Dại 1 Giờ - Chu Thúy Quỳnh | Official Music Video.<br />
                            Singer: Chu Thuý Quỳnh<br />
                            Composer: Issac Thái<br />
                            Music Produce r: Issac Thái<br />
                            Arrangement : Phúc CD<br />
                            Record : Lê Nguyên Thắng<br />
                            Mix & Master : Minh Đức<br />
                            Vocal : Me Studio<br />
                            Cast : Junki Trần Hòa<br />
                            Talent Manager : Đào Thu Hiền<br />
                            Assistant Manager : Chu Quỳnh Châu<br />
                            Director : Đỗ Khôi<br />
                            Camera O.P : Cường S.O<br />
                            Assistant Camera : Quốc Anh - Quang Vinh<br />
                            Focus Puller : Sái Lâm<br />
                            Lighting : Hải Chín Tư<br />
                            Design : Đặng Tuấn Vũ - Huynh Trần<br />
                            Editor & Colorist : Yan Huy Trần<br />
                            BTS : Quang Minh<br />
                            M.U.A : Huỳnh Khải<br />
                            Equipment : Aerial Media<br />
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContentLeft