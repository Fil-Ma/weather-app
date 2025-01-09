import { searchByLocation } from "@api/index";
import { TCityOption } from "@components/SearchForm/types";
import { RATE_LIMITING_TIME } from "@constants/api";
import { throttle } from "lodash";
import { useCallback, useState } from "react";

const useSearchLocation = () => {
  const [options, setOptions] = useState<TCityOption[]>([]);

  const searchLocation = useCallback(
    throttle(async (city: string) => {
      try {
        const response = await searchByLocation(city);
        const data = response.map(parseOptions);
        setOptions(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }, RATE_LIMITING_TIME),
    []
  );

  const resetOptions = () => setOptions([]);

  return {
    options,
    searchLocation,
    resetOptions,
  };
};

export default useSearchLocation;

const parseOptions = (option: any): TCityOption => {
  return {
    name: option?.name || "",
    lat: option?.lat || 0,
    lon: option?.lon || 0,
    country: option?.country || "",
    state: option?.state || "",
    localNames: option?.local_names,
  };
};
