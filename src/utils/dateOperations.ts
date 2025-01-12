import { TUserLanguage } from "@contexts/LanguageContext/types";

export const getDateLanguage = (language: string) => {
  switch (language) {
    case "it":
      return "it-IT";
    case "en":
    default:
      return "en-US";
  }
};

/**
 * Converts epoch format data to local.
 *
 * @param { Object } epochDate | date in epoch format
 * @returns { Object } local date, local time
 */
export function dateToString(epochDate: number, language: TUserLanguage) {
  // transfom date to normal format from epoch seconds
  let currentDateTime = new Date(0);
  const dateEpoch = epochDate;
  currentDateTime.setUTCSeconds(dateEpoch);

  // Transform language to Language Tags (BCP 47)
  const standardLanguageTag = getDateLanguage(language);

  const date = currentDateTime.toLocaleDateString(standardLanguageTag, {
    weekday: "short",
    month: "long",
    day: "numeric",
  });

  const time = currentDateTime.toLocaleTimeString(standardLanguageTag, {
    hour: "numeric",
    minute: "numeric",
  });

  return { date, time };
}
