import { Box, Button } from "@mui/material";
import { useLanguageContext } from "@contexts/LanguageContext/LanguageContextProvider";
import React from "react";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function PositionSearch({
  hasGeolocation,
  handleGeopositionSearch,
}: {
  hasGeolocation: boolean;
  handleGeopositionSearch: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const { dictionary } = useLanguageContext();

  return (
    <Box sx={{ width: "23%" }}>
      {hasGeolocation && (
        <Button
          className="position-button"
          sx={{
            backgroundColor: "primary.main",
            color: "#FFF",
            pr: "12px",
          }}
          onClick={handleGeopositionSearch}
        >
          {/* <LocationOnIcon /> */}
          {dictionary.search.position["button-text"]}
        </Button>
      )}
    </Box>
  );
}
