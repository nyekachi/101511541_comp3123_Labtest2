import React, {useState}from "react";

export default function SearchBar({onSearch}) {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
    };

    return (
        <form onSubmit={handleSubmit} className="search-container">
            <input
                type="text"
                placeholder="search city ..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit">Search</button>
        </form>
    );
}