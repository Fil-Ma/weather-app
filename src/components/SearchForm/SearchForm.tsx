import React, { useState } from "react";
import {
  Button,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useLanguageContext } from "@contexts/LanguageContext/LanguageContextProvider";
import LocationIcon from "@assets/icons/map-pin.svg?react";
import useSearchLocation from "@hooks/useSearchLocation";
import CityOption from "./CityOption";
import SearchIcon from "@assets/icons/search.svg?react";

type Props = {
  onSubmit: (
    latitude: number,
    longitude: number,
    city?: string
  ) => Promise<void>;
};

const SearchForm = ({ onSubmit }: Props) => {
  const [city, setCity] = useState("");
  const { dictionary } = useLanguageContext();
  const { options, searchLocation, resetOptions } = useSearchLocation();

  const hasGeolocation = navigator.geolocation ? true : false;

  const handleUseCurrentPosition = () => {
    setCity("");
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      onSubmit(latitude, longitude);
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchLocation(city);
  };

  return (
    <Section>
      <Typography color="textPrimary">
        {dictionary.search["search-bar"].title}
      </Typography>
      {hasGeolocation && (
        <Button onClick={handleUseCurrentPosition} variant="contained">
          <LocationIcon /> {dictionary.search.position["button-text"]}
        </Button>
      )}

      <Form onSubmit={handleSubmit}>
        <Input
          value={city}
          onChange={(event) => setCity(event.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </Form>

      {options.length > 0 && (
        <>
          <Typography color="textPrimary">
            {options.length} results found
          </Typography>
          <CityOptionsList>
            {options.map((option, index) => {
              const { lat, lon, ...rest } = option;
              return (
                <CityOption
                  key={index}
                  {...rest}
                  onClick={() => {
                    onSubmit(lat, lon, rest.name);
                    resetOptions();
                  }}
                />
              );
            })}
          </CityOptionsList>
        </>
      )}
    </Section>
  );
};

export default SearchForm;

const CityOptionsList = styled("ul")(() => ({
  listStyleType: "none",
  padding: 0,
  margin: 0,
}));

const Section = styled("section")(({ theme }) => ({
  marginBottom: "3rem",
  marginInline: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "12px",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "stretch",
  },
}));

const Form = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  alignItems: "center",
  marginTop: "32px",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "stretch",
  },
}));

const Input = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.contrastText,

  [theme.breakpoints.up("sm")]: {
    minWidth: "400px",
  },
}));
