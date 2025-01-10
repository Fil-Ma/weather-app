import { Box, styled, Typography } from "@mui/material";
import { TCurrentForecast } from "../types";
import { kelvinToCelsius } from "@utils/temperatureOperations";
import CurrentWeather from "./CurrentWeather";
import { convertToKmh, getWindDirection } from "@utils/windOperations";
import { useLanguageContext } from "@contexts/LanguageContext/LanguageContextProvider";
import MapPinIcon from "@assets/icons/map-pin.svg?react";

type Props = {
  location: string;
  data: TCurrentForecast;
};

function CurrentForecast({ location, data }: Props) {
  const { dictionary } = useLanguageContext();

  const locationItems = [
    {
      title: "location",
      Icon: <MapPinIcon />,
      content: location,
    },
    {
      title: "location time",
      content: "",
    },
  ];

  const stats = [
    {
      title: dictionary.forecast.current.pressure,
      Icon: <MapPinIcon />,
      content: data.pressure,
    },
    {
      title: dictionary.forecast.current.humidity,
      Icon: <MapPinIcon />,
      content: data.humidity,
    },
    {
      title: dictionary.forecast.current.windSpeed,
      Icon: <MapPinIcon />,
      content: convertToKmh(data.wind_speed),
    },
    {
      title: dictionary.forecast.current.windDirection,
      Icon: <MapPinIcon />,
      content: getWindDirection(data.wind_deg),
    },
  ];

  // const sunriseDateTime = dateToString(data.sunrise, language);
  // const sunsetDateTime = dateToString(data.sunset, language);

  return (
    <Container>
      <CurrentStatus>
        {locationItems.map(({ title, Icon, content }) => {
          if (!content) return null;
          return (
            <TextWithIcon key={title}>
              {Icon}
              {content}
            </TextWithIcon>
          );
        })}
        <CurrentWeather
          weather={data.weather[0]}
          temperature={kelvinToCelsius(data.temp)}
        />
      </CurrentStatus>
      <StatsContainer>
        {stats.map(({ title, Icon, content }) => (
          <StatsItem key={title}>
            <TextWithIcon color="textSecondary">
              {Icon}
              {title}
            </TextWithIcon>
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

const StatsContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "24px",

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: "16px",
  },
}));

const StatsItem = styled(Box)(({ theme }) => ({
  border: "1px solid rgba(0,0,0,0.3)",
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  textTransform: "capitalize",
  borderRadius: "8px",
  padding: "16px",

  [theme.breakpoints.down("sm")]: {
    padding: "12px",
  },
}));

const TextWithIcon = styled(Typography)(() => ({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));
