import { Box, styled, Typography } from "@mui/material";
import CurrentWeatherData from "./CurrentWeatherData";
import { TCurrentForecast } from "../types";
import { useLanguageContext } from "@contexts/LanguageContext/LanguageContextProvider";
import { buildIconUrl } from "@api/index";
import CustomImage from "@components/common/CustomImage";

type Props = {
  location: string;
  data: TCurrentForecast;
};

function CurrentForecast({ location, data }: Props) {
  const { dictionary } = useLanguageContext();
  const iconUrl = buildIconUrl(data.weather[0].icon);
  return (
    <Container>
      <CurrentStatus gridColumn="1">
        <Box gridRow="1">
          <Typography color="textPrimary">
            {dictionary.forecast.current.status.location}: {location}
          </Typography>
        </Box>

        <Box gridRow="2 / span 4">
          <CustomImage
            src={iconUrl}
            style={{ height: "100%" }}
            alt="forecast status current"
          />
        </Box>

        <Box gridRow="6 / 7">
          <Typography color="textPrimary">
            {dictionary.forecast.current.status.description}:{" "}
            {data.weather[0].description}
          </Typography>
        </Box>
      </CurrentStatus>

      <Box gridColumn="2">
        <CurrentWeatherData data={data} />
      </Box>
    </Container>
  );
}

export default CurrentForecast;

const Container = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "24px",
  marginBlock: "3rem",

  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const CurrentStatus = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateRows: "2rem repeat(4, 1fr) 2rem",
  gap: "12px",
  height: "max-content",
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.contrastText,
  borderRadius: "1rem",
  padding: "1rem 2rem",
  border: "1px solid rgba(0,0,0,0.3)",

  [theme.breakpoints.down("sm")]: {
    marginBottom: "2rem",
  },
}));
