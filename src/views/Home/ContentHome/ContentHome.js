import React from "react";
import Navigation from '../../Navigation/Navigation'
import './ContentHome.scss'
import VideoCard from '../../VideoCard/VideoCard'
import mv1 from '../../../assests/hardcode/mv1.jpg'
import mv2 from '../../../assests/hardcode/mv2.jpg'
import mv3 from '../../../assests/hardcode/mv3.jpg'
import mv4 from '../../../assests/hardcode/mv4.jpg'
import mv5 from '../../../assests/hardcode/mv5.jpg'
import mv6 from '../../../assests/hardcode/mv6.png'
import mv1a from '../../../assests/hardcode/mv1-1.jpg'
import mv2a from '../../../assests/hardcode/mv2a.jpg'
import mv3a from '../../../assests/hardcode/mv3a.jpg'
import mv4a from '../../../assests/hardcode/mv4a.jpg'
import mv5a from '../../../assests/hardcode/mv5a.jpg'
import mv6a from '../../../assests/hardcode/mv6a.jpg'

class ContentHome extends React.Component {
    render() {
        return (
            <div className="content-container">
                <Navigation />
                <div className="content-video">
                    <VideoCard
                        thumbnail={mv1}
                        avtChanel={mv1a}
                        nameVideo={'Yêu 3 Năm Dại 1 Giờ - Chu Thúy Quỳnh | Official Music Video'}
                        nameChanel={'Chu Thúy Quỳnh'}
                        views={'1.000.000 lượt xem'}
                    />
                    <VideoCard
                        thumbnail={mv2}
                        avtChanel={mv2a}
                        nameVideo={'NHẬT PHONG | THẬT LÒNG YÊU | OFFICIAL MUSIC VIDEO'}
                        nameChanel={'Nhật Phong'}
                        views={'1.000.000 lượt xem'} />
                    <VideoCard
                        thumbnail={mv3}
                        avtChanel={mv3a}
                        nameVideo={'ERIK - \'Em Không Sai, Chúng Ta Sai\' (Official MV)'}
                        nameChanel={'ERIK Offical'}
                        views={'1.000.000 lượt xem'} />
                    <VideoCard
                        thumbnail={mv4}
                        avtChanel={mv4a}
                        nameVideo={'Thương Về Miền Trung - Phương Anh (Official MV)'}
                        nameChanel={'Phương Anh Bolero'}
                        views={'1.000.000 lượt xem'} />
                    <VideoCard
                        thumbnail={mv5}
                        avtChanel={mv5a}
                        nameVideo={'HOÀI MỘT ĐỜI CHỜ ĐỢI - KHANG VIỆT | OFFICIAL MUSIC VIDEO'}
                        nameChanel={'Khang Việt'}
                        views={'1.000.000 lượt xem'} />
                    <VideoCard
                        thumbnail={mv6}
                        avtChanel={mv6a}
                        nameVideo={'Sa Mạc Tình Yêu - Phương Ý (Quán Quân Thần Tượng Bolero 2019) | Official 4K MV'}
                        nameChanel={'Phương Ý Offical'}
                        views={'1.000.000 lượt xem'} />
                </div>
            </div>
        )
    }
}
export default ContentHome