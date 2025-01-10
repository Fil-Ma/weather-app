import { Box, styled, Typography } from "@mui/material";
import { buildIconUrl } from "@api/index";
import CustomImage from "@components/common/CustomImage";
import { TWeather } from "../types";

const CurrentWeather = ({
  weather,
  temperature,
}: {
  weather: TWeather;
  temperature: string;
}) => {
  const iconUrl = buildIconUrl(weather.icon);
  return (
    <>
      <ImageContainer>
        <CustomImage
          src={iconUrl}
          style={{ height: "100%" }}
          alt="forecast status current"
        />
        <Typography>
          {temperature}
          <sup>
            <Typography variant="caption">&deg;C</Typography>
          </sup>
        </Typography>
      </ImageContainer>
      <Typography color="textSecondary">{weather.description}</Typography>
    </>
  );
};

export default CurrentWeather;

const ImageContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "24px",
  textAlign: "center",

  "& > *": {
    flex: 1,
  },

  p: {
    fontSize: "2.5rem",
  },

  span: {
    fontSize: "1.2rem",
    paddingLeft: "4px",
  },
}));
