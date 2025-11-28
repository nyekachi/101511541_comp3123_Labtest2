import React, {useState}from "react";
import {FiSearch} from "react-icons/fi";
import "./SearchBar.css";

const SearchBar = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            onSearch(searchTerm.trim());
        }
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search for a city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
                />
            <button type="submit" className="search-button">
                <FiSearch  className="search-icon"/>
            </button>
        </form>
    );
};
export default SearchBar;