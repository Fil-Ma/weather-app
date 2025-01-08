import React from "react";
import { Box, Typography } from "@mui/material";
import { useLanguageContext } from "../contexts/LanguageContext";

export default function NoData() {
  const { dictionary } = useLanguageContext();

  return (
    <Box
      sx={{
        textAlign: "center",
        height: "50vh",
        color: "primary.contrastText",
      }}
    >
      <Typography component="h2">
        {dictionary.forecast.container["no-data-message"]}
      </Typography>
    </Box>
  );
}
