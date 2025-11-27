import React, {useState}from "react";

export default function SearchBar({onSearch}) {
    const [city, setCity] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!city) return;
        onSearch(city);
        setCity("");
    };

    return (
        <form onSubmit={submit} className="search-bar">
            <input
                placeholder="search a city ..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit">Search</button>
        </form>
    );
}