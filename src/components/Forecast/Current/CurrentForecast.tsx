import { Box } from "@mui/material";
import CurrentStatus from "./CurrentStatus";
import CurrentWeatherData from "./CurrentWeatherData";
import { TCurrentForecast } from "../types";

type Props = {
  location: string;
  data: TCurrentForecast;
};

function CurrentForecast({ location, data }: Props) {
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
            location={location}
            image={data.weather[0].icon}
            currentStatus={data.weather[0].description}
          />
        </Box>

        {/* current weather data: column 2 */}
        <Box gridColumn="2">
          <CurrentWeatherData data={data} />
        </Box>
      </Box>
    </Box>
  );
}

export default CurrentForecast;
