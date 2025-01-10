import { styled, Typography } from "@mui/material";
import { TCityOption } from "./types";
import { useLanguageContext } from "@contexts/LanguageContext/LanguageContextProvider";

interface Props extends Omit<TCityOption, "lat" | "lon"> {
  onClick: () => void;
}

const CityOption = ({ name, country, state, onClick }: Props) => {
  const { language } = useLanguageContext();
  const regionNames = new Intl.DisplayNames([language], { type: "region" });
  const cityRegion = regionNames.of(country);
  return (
    <Item onClick={onClick}>
      <Typography color="textPrimary">{name}</Typography>
      <Typography color="textSecondary">
        {state ? `${state}, ${cityRegion}` : cityRegion}
      </Typography>
    </Item>
  );
};

export default CityOption;

const Item = styled("li")(() => ({
  border: "1px solid black",
  borderRadius: "8px",
  padding: "8px 16px",
  marginBottom: "8px",
  backgroundColor: "#FFF",

  "&:hover": {
    cursor: "pointer",
  },
}));
