import "./search-bar.css";
import React from "react";

const GOOGLE_API_URL = process.env.GOOGLE_API_URL;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

export default function SearchBar({ handleSubmit }) {

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            {/* search bar with google location autocomplete */}
            
        </form>
    )
}

