import React from "react";
import Header from "../Header/Header";
import ContentHome from "./ContentHome/ContentHome";
import './Home.scss'

class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <div className='home-header'>
                    <Header />
                </div>
                <div className="home-content">
                    <ContentHome />
                </div>
            </div>
        )
    }
}
export default Home