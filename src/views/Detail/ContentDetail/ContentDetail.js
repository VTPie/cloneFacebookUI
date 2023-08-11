import React from "react";
import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";
import './ContentDetail.scss'

class ContentDetail extends React.Component {
    render() {
        return (
            <div className="contentDetail-container">
                <ContentLeft />
                <ContentRight />
            </div>
        )
    }
}
export default ContentDetail