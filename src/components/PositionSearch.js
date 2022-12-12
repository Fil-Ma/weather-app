import React from "react";
import {
    Box,
    Button
} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function PositionSearch({ hasGeolocation, handleGeopositionSearch }) {

    return (
        <Box sx={{ width: "23%" }}>
            {
                hasGeolocation && (
                    <Button
                        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
                        onClick={handleGeopositionSearch}>
                            <LocationOnIcon /> use position
                    </Button>
                )
            }
        </Box>
    )
}