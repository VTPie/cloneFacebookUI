import React from "react";
import Navigation from '../../Navigation/Navigation'
import './ContentHome.scss'
import VideoCard from '../../VideoCard/VideoCard'
import images from '../../../assests/hardcode/images'
import MiniNav from '../../Navigation/MiniNav'

class ContentHome extends React.Component {
    render() {
        return (
            <div className="content-container">
                <div className="content-nav">
                    <Navigation />
                </div>
                <div className="content-mininav">
                    <MiniNav />
                </div>
                <div className="content-video">
                    <VideoCard
                        thumbnail={images.mv1}
                        avtChanel={images.mv1a}
                        nameVideo={'Yêu 3 Năm Dại 1 Giờ - Chu Thúy Quỳnh | Official Music Video'}
                        nameChanel={'Chu Thúy Quỳnh'}
                        views={'1.000.000 lượt xem'}
                    />
                    <VideoCard
                        thumbnail={images.mv2}
                        avtChanel={images.mv2a}
                        nameVideo={'NHẬT PHONG | THẬT LÒNG YÊU | OFFICIAL MUSIC VIDEO'}
                        nameChanel={'Nhật Phong'}
                        views={'1.000.000 lượt xem'} />
                    <VideoCard
                        thumbnail={images.mv3}
                        avtChanel={images.mv3a}
                        nameVideo={'ERIK - \'Em Không Sai, Chúng Ta Sai\' (Official MV)'}
                        nameChanel={'ERIK Offical'}
                        views={'1.000.000 lượt xem'} />
                    <VideoCard
                        thumbnail={images.mv4}
                        avtChanel={images.mv4a}
                        nameVideo={'Thương Về Miền Trung - Phương Anh (Official MV)'}
                        nameChanel={'Phương Anh Bolero'}
                        views={'1.000.000 lượt xem'} />
                    <VideoCard
                        thumbnail={images.mv5}
                        avtChanel={images.mv5a}
                        nameVideo={'HOÀI MỘT ĐỜI CHỜ ĐỢI - KHANG VIỆT | OFFICIAL MUSIC VIDEO'}
                        nameChanel={'Khang Việt'}
                        views={'1.000.000 lượt xem'} />
                    <VideoCard
                        thumbnail={images.mv6}
                        avtChanel={images.mv6a}
                        nameVideo={'Sa Mạc Tình Yêu - Phương Ý (Quán Quân Thần Tượng Bolero 2019) | Official 4K MV'}
                        nameChanel={'Phương Ý Offical'}
                        views={'1.000.000 lượt xem'} />
                    <VideoCard
                        thumbnail={images.mv7}
                        avtChanel={images.mv7a}
                        nameVideo={'HOÀ MINZY x BÙI CÔNG NAM | TẾT BÙNG NỘI LỰC | OFFICIAL MV'}
                        nameChanel={'Hòa Minzy'}
                        views={'1.000.000 lượt xem'} />
                    <VideoCard
                        thumbnail={images.mv8}
                        avtChanel={images.mv7a}
                        nameVideo={'TẾT XA HÓA GẦN – Hòa Minzy x Mew Amazing (Official MV)'}
                        nameChanel={'Hòa Minzy'}
                        views={'1.000.000 lượt xem'} />
                    <VideoCard
                        thumbnail={images.mv9}
                        avtChanel={images.mv7a}
                        nameVideo={'Tết Nhà Mình - Hòa Minzy & Lăng LD | Gala Nhạc Việt 15'}
                        nameChanel={'Hòa Minzy'}
                        views={'1.000.000 lượt xem'} />
                    <VideoCard
                        thumbnail={images.mv9}
                        avtChanel={images.mv7a}
                        nameVideo={'Tết Nhà Mình - Hòa Minzy & Lăng LD | Gala Nhạc Việt 15'}
                        nameChanel={'Hòa Minzy'}
                        views={'1.000.000 lượt xem'} />
                </div>
            </div>
        )
    }
}
export default ContentHome