import React from "react";
import {
    Box,
    Button
} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function PositionSearch({ handleGeopositionSearch }) {

    return (
        <Box sx={{ width: "23%", alignSelf: "flex-end" }}>
            <Button
                sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
                onClick={handleGeopositionSearch}>
                    <LocationOnIcon /> Or use your current position
            </Button>
        </Box>
    )
}