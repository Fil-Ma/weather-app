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
        <Box 
            display="grid" 
            gridTemplateRows="2rem repeat(4, 1fr) 2rem" 
            gap={1.5} 
            alignItems="center"
            sx={{ 
                backgroundColor: "#FFF", 
                borderRadius: "1rem",
                p: "1rem 2rem",
                border: "1px solid rgba(0,0,0,0.3)"
            }}>
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
                        Status: { currentStatus }
                    </Typography>
                </Box>
        </Box>
    )
}