import React from "react";
import {
    Box,
    Typography
} from "@mui/material";

export default function CurrentStatus({
    location,
    image,
    currentStatus
}) {

    return (
        <Box display="grid" gridTemplateRows="2rem repeat(4, 1fr) 2rem" gap={1} alignItems="center">
            <Box gridRow="1" >
                    <Typography>
                        Location: {location}
                    </Typography>
            </Box>

            <Box gridRow="2 / span 4">
                <img src="#" style={{ height: "100%" }} alt="forecast status current" />
            </Box>

            <Box gridRow="6 / 7">
                <Typography>
                    accurate status: { currentStatus }
                </Typography>
            </Box>
        </Box>
    )
}