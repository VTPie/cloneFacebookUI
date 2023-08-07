import React from "react";
import Header from "../Header/Header";
import ContentHome from "./ContentHome/ContentHome";

class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <Header />
                <ContentHome />
            </div>
        )
    }
}
export default Home