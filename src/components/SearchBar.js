import React, { useState } from "react";

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const GOOGLE_API_URL = process.env.GOOGLE_API_URL;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

export default function SearchBar({ handleChange }) {
    const [searchValue, setSearchValue] = useState("");
    const [options, setOptions] = useState([]);

    return (
        <Box className="search-bar" sx={{ width: 1/2, mb: "2rem", mx: "auto" }}>
            <Typography>
                Enter the name of the city you want to see the forecast for:
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
                    <TextField {...params} label="Add a location" fullWidth />
                )}
             />
        </Box>
    )
}

