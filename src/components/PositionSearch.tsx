import { Box, Button } from "@mui/material";
import { useLanguageContext } from "@contexts/LanguageContext/LanguageContextProvider";
import React from "react";
import LocationIcon from "@assets/icons/map-pin.svg?react";

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
          <LocationIcon /> {dictionary.search.position["button-text"]}
        </Button>
      )}
    </Box>
  );
}
