import React from "react";
import MiniCard from "../../VideoCard/MiniCard";
import images from '../../../assests/hardcode/images'

class ContentRight extends React.Component {
    render() {
        return (
            <div className="contRight-container">
                <p className="contRight-title">Đề xuất</p>
                <MiniCard
                    thumbnail={images.mv2}
                    nameVideo={'NHẬT PHONG | THẬT LÒNG YÊU | OFFICIAL MUSIC VIDEO'}
                    nameChanel={'Nhật Phong'}
                    views={'1.000.000 lượt xem'} />
                <MiniCard
                    thumbnail={images.mv3}
                    nameVideo={'ERIK - \'Em Không Sai, Chúng Ta Sai\' (Official MV)'}
                    nameChanel={'ERIK Offical'}
                    views={'1.000.000 lượt xem'} />
                <MiniCard
                    thumbnail={images.mv4}
                    nameVideo={'Thương Về Miền Trung - Phương Anh (Official MV)'}
                    nameChanel={'Phương Anh Bolero'}
                    views={'1.000.000 lượt xem'} />
                <MiniCard
                    thumbnail={images.mv5}
                    nameVideo={'HOÀI MỘT ĐỜI CHỜ ĐỢI - KHANG VIỆT | OFFICIAL MUSIC VIDEO'}
                    nameChanel={'Khang Việt'}
                    views={'1.000.000 lượt xem'} />
                <MiniCard
                    thumbnail={images.mv6}
                    nameVideo={'Sa Mạc Tình Yêu - Phương Ý (Quán Quân Thần Tượng Bolero 2019) | Official 4K MV'}
                    nameChanel={'Phương Ý Offical'}
                    views={'1.000.000 lượt xem'} />
                <MiniCard
                    thumbnail={images.mv7}
                    nameVideo={'HOÀ MINZY x BÙI CÔNG NAM | TẾT BÙNG NỘI LỰC | OFFICIAL MV'}
                    nameChanel={'Hòa Minzy'}
                    views={'1.000.000 lượt xem'} />
                <MiniCard
                    thumbnail={images.mv8}
                    nameVideo={'TẾT XA HÓA GẦN – Hòa Minzy x Mew Amazing (Official MV)'}
                    nameChanel={'Hòa Minzy'}
                    views={'1.000.000 lượt xem'} />
                <MiniCard
                    thumbnail={images.mv9}
                    nameVideo={'Tết Nhà Mình - Hòa Minzy & Lăng LD | Gala Nhạc Việt 15'}
                    nameChanel={'Hòa Minzy'}
                    views={'1.000.000 lượt xem'} />
            </div>
        )
    }
}
export default ContentRight