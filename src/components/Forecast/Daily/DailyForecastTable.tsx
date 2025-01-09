import { useLanguageContext } from "@contexts/LanguageContext/LanguageContextProvider";
import { createTableData } from "@utils/tableOperations";
import { TDailyForecast } from "../types";
import { buildIconUrl } from "@api/index";
import CustomTable from "@components/common/CustomTable";

export default function DailyForecastTable({
  data,
}: {
  data: TDailyForecast[];
}) {
  const { language, dictionary } = useLanguageContext();
  const { columnLabels, rows } = createTableData(data, language);

  return (
    <CustomTable
      title={dictionary.forecast.daily.title}
      columnLabels={columnLabels}
      rows={rows}
      rowLabelsDictionary={dictionary.forecast.daily["row-labels"]}
      renderValue={(element: any, index: number, key: string) => {
        const renderMinMax =
          key === "temperatureCelsius" ||
          key === "feelsLikeCelsius" ||
          key === "temperatureFahrenheit" ||
          key === "feelsLikeFahrenheit";

        if (renderMinMax) {
          return `${element.min} | ${element.max}`;
        } else if (key === "image") {
          return <img src={buildIconUrl(element)} alt={element} />;
        } else {
          return element;
        }
      }}
    />
  );
}
