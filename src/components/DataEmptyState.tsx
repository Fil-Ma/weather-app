import { Box, Typography } from "@mui/material";
import { useLanguageContext } from "@contexts/LanguageContext/LanguageContextProvider";

function DataEmptyState() {
  const { dictionary } = useLanguageContext();

  return (
    <Box
      sx={{
        textAlign: "center",
        color: "primary.contrastText",
      }}
    >
      <Typography component="h2">
        {dictionary.forecast.container["no-data-message"]}
      </Typography>
    </Box>
  );
}

export default DataEmptyState;
