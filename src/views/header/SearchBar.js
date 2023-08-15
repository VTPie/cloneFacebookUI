import React from "react";
import search from '../..//assests/icons/search.png'
import mic from '../../assests/icons/mic.png'

class SearchBar extends React.Component {
    render() {
        return (
            <div className="searchbar-container">
                <input className="searchbar-input" placeholder="Tìm kiếm"></input>
                <div className="searchbar-btnSearch">
                    <img src={search} className="searchbar-icon" alt="search icon" />
                </div>
                <div className="searchbar-btnMic">
                    <img src={mic} className="mic-icon" alt="mic icon" />
                </div>
            </div>
        )
    }
}
export default SearchBar