import React from "react";
import { Box } from "@mui/material";
import CurrentStatus from "./current-forecast/CurrentStatus";
import CurrentWeatherData from "./current-forecast/CurrentWeatherData";

import { useLanguageContext } from "../contexts/LanguageContext";
import { normalizeData } from "../utils/dataNormalization";

export default function CurrentForecast({ currentData }) {
  const { language } = useLanguageContext();
  const normalizedData = normalizeData(currentData, language);

  return (
    <Box sx={{ my: "3rem" }}>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        sx={{ minHeight: "25rem" }}
        gap={3}
      >
        {/* current weather status: column 1 */}
        <Box gridColumn="1">
          <CurrentStatus
            location=""
            image={normalizedData.statusImage}
            currentStatus={normalizedData.statusDescription}
          />
        </Box>

        {/* current weather data: column 2 */}
        <Box gridColumn="2">
          <CurrentWeatherData data={normalizedData} />
        </Box>
      </Box>
    </Box>
  );
}
