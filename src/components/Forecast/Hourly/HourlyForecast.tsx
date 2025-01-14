import { useLanguageContext } from "@contexts/LanguageContext/LanguageContextProvider";
import { createHourlyTableData } from "@utils/tableOperations";
import { THourlyForecast } from "../types";
import { buildIconUrl } from "@api/index";
import CustomTable from "@components/common/CustomTable";
import CustomImage from "@components/common/CustomImage";

export default function HourlyForecast({ data }: { data: THourlyForecast[] }) {
  const { language, dictionary } = useLanguageContext();
  const { columnLabels, rows } = createHourlyTableData(data, language);

  return (
    <CustomTable
      title={dictionary.forecast.hourly.title}
      columnLabels={columnLabels}
      rows={rows}
      rowLabelsDictionary={dictionary.forecast.hourly["row-labels"]}
      renderValue={(element: any, _: number, key: string) => {
        if (key === "image") {
          return <CustomImage src={buildIconUrl(element)} alt={element} />;
        } else {
          return element;
        }
      }}
    />
  );
}
