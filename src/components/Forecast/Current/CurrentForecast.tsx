import { Box, styled, Typography } from "@mui/material";
import { TCurrentForecast } from "../types";
import { kelvinToCelsius } from "@utils/temperatureOperations";
import CurrentWeather from "./CurrentWeather";
import { convertToKmh, getWindDirection } from "@utils/windOperations";
import { dateToString } from "@utils/dateOperations";
import { useLanguageContext } from "@contexts/LanguageContext/LanguageContextProvider";

type Props = {
  location: string;
  data: TCurrentForecast;
};

function CurrentForecast({ location, data }: Props) {
  const { dictionary, language } = useLanguageContext();

  const locationItems = [
    {
      title: "location",
      content: "",
    },
    {
      title: "location time",
      content: "",
    },
  ];

  const stats = [
    {
      title: dictionary.forecast.current.pressure,
      content: data.pressure + " hPa",
    },
    {
      title: dictionary.forecast.current.humidity,
      content: data.humidity + "%",
    },
    {
      title: dictionary.forecast.current["wind-speed"],
      content: convertToKmh(data.wind_speed) + " Km/h",
    },
    {
      title: dictionary.forecast.current["wind-direction"],
      content: getWindDirection(data.wind_deg),
    },
  ];

  const sunriseDateTime = dateToString(data.sunrise, language);
  const sunsetDateTime = dateToString(data.sunset, language);

  return (
    <Container>
      <CurrentStatus>
        {locationItems.map(({ title, content }) => (
          <Typography key={title}>{title}</Typography>
        ))}
        <CurrentWeather
          weather={data.weather[0]}
          temperature={kelvinToCelsius(data.temp)}
        />
      </CurrentStatus>
      <StatsContainer>
        {stats.map(({ title, content }) => (
          <StatsItem key={title}>
            <Typography color="textSecondary">{title}</Typography>
            <Typography color="textPrimary">{content}</Typography>
          </StatsItem>
        ))}
      </StatsContainer>
    </Container>
  );
}

export default CurrentForecast;

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "32px",
  marginBlock: "2rem",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "stretch",
  },
}));

const CurrentStatus = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  textTransform: "capitalize",
  borderRadius: "8px",
  padding: "1rem 2rem",
  border: "1px solid rgba(0,0,0,0.3)",
}));

const StatsContainer = styled(Box)(() => ({
  flex: 1,
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "24px",
}));

const StatsItem = styled(Box)(({ theme }) => ({
  border: "1px solid rgba(0,0,0,0.3)",
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  textTransform: "capitalize",
  borderRadius: "8px",
  padding: "1rem",
}));
