import React from "react";
import Header from '../Header/Header'
import ContentDetail from "./ContentDetail/ContentDetail";
import './Detail.scss'

class Detail extends React.Component {
    render() {
        return (
            <div className="detail-container">
                <div className="detail-header">
                    <Header />
                </div>
                <ContentDetail />
            </div>
        )
    }
}
export default Detail