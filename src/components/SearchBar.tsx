import { useState, useRef, useEffect, useMemo } from "react";

import { Autocomplete, TextField, Box, Typography, Grid } from "@mui/material";
import parse from "autosuggest-highlight/parse";
import throttle from "lodash/throttle";

import LocationIcon from "@assets/icons/map-pin.svg?react";
import { useLanguageContext } from "@contexts/LanguageContext/LanguageContextProvider";

// google api basic data
const GOOGLE_API_KEY = import.meta.env.GOOGLE_API_KEY;

// function load script to add scripts to html
function loadScript(src: string, position: HTMLElement | null, id: string) {
  if (!position) {
    return;
  }

  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("id", id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService: { current: any } = { current: null };

// search bar
export default function SearchBar() {
  const [value, setValue] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<any[]>([]);

  const { dictionary } = useLanguageContext();

  const loaded = useRef(false);

  // if window object is defined and script is not loaded
  if (typeof window !== "undefined" && !loaded.current) {
    if (!document.querySelector("#google-maps")) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`,
        document.querySelector("head"),
        "google-maps"
      );
    }

    loaded.current = true;
  }

  // memoized function that retrieves places
  const fetch = useMemo(
    () =>
      throttle((request, callback) => {
        if (autocompleteService.current) {
          autocompleteService.current.getPlacePredictions(request, callback);
        }
      }, 200),
    []
  );

  // load autocomplete service and fetch results
  useEffect(() => {
    let active = true;

    if (!autocompleteService.current && window.google) {
      autocompleteService.current =
        new window.google.maps.places.AutocompleteService();
    }

    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch({ input: inputValue }, (results: any) => {
      if (active) {
        let newOptions: any = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  return (
    <Box className="search-bar" sx={{ width: "70%" }}>
      <Autocomplete
        id="autocomplete-input"
        sx={{
          borderColor: "primary.contrastText",
        }}
        autoComplete
        includeInputInList
        filterSelectedOptions
        getOptionLabel={(option: any) =>
          typeof option === "string" ? option : option.description
        }
        filterOptions={(x) => x}
        options={options}
        value={value}
        onChange={(event, newValue) => {
          setOptions(newValue ? [newValue, ...options] : options);
          setValue(newValue);
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={dictionary.search["search-bar"]["autocomplete-placeholder"]}
            sx={{
              backgroundColor: "background.paper",
              color: "primary.contrastText",
            }}
            fullWidth
          />
        )}
        renderOption={(props, option) => {
          const matches =
            option.structured_formatting.main_text_matched_substrings;
          const parts = parse(
            option.structured_formatting.main_text,
            matches.map((match: any) => [
              match.offset,
              match.offset + match.length,
            ])
          );

          return (
            <li {...props}>
              <Grid container alignItems="center">
                <Grid item>
                  <Box
                    component={LocationIcon}
                    sx={{ color: "text.secondary", mr: 2 }}
                  />
                </Grid>
                <Grid item xs>
                  {parts.map((part, index) => (
                    <span
                      key={index}
                      style={{
                        fontWeight: part.highlight ? 700 : 400,
                      }}
                    >
                      {part.text}
                    </span>
                  ))}

                  <Typography variant="body2" color="text.secondary">
                    {option.structured_formatting.secondary_text}
                  </Typography>
                </Grid>
              </Grid>
            </li>
          );
        }}
      />
    </Box>
  );
}
