import React, { useState } from "react";

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useLanguageContext } from "../contexts/LanguageContext";

const GOOGLE_API_URL = process.env.GOOGLE_API_URL;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

export default function SearchBar({ handleChange }) {
    const [searchValue, setSearchValue] = useState("");
    const [options, setOptions] = useState([]);
    const { language, dictionary } = useLanguageContext();

    return (
        <Box className="search-bar" sx={{ width: 1/2, mb: "2rem", mx: "auto" }}>
            <Typography>
                {
                    dictionary["search-bar"].title
                }
            </Typography>

            <Autocomplete
                id="autocomplete-input"
                sx={{  mt: "1.5rem" }}
                autoComplete
                autoHighlight
                options={options}
                onChange={handleChange}
                onInputChange={(event, newInputValue) => {
                    setSearchValue(newInputValue);
                }}
                renderInput={(params) => (
                    <TextField {...params} label={dictionary["search-bar"]["autocomplete-placeholder"]} fullWidth />
                )}
             />
        </Box>
    )
}

